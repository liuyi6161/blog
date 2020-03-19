---
title: docker搭建git-runner
date: 2020-03-17
sidebar: auto
author:  61
categories:
 - 其它
tags:
 - docker
keys:
 - 'e10adc3949ba59abbe56e057f20f883e' 
 - '4f2016c6b934d55bd7120e5d0e62cce3' 
 - '89ad7e83ddeb05ca58f554c5384a0c1b' 
---
---//123456---
---//我爱你---
---/何艾我爱你---
## 前言

万物的初始：centos7 64位 内核3.10以上 且能够访问外网(如果通过安装包安装docker可以不需要)。首先这边简单阐述一下gitlab CI流水线的工作流程：首先通过配置CI runner然后编写.gitlab-ci.yml脚本定义如何执行。 执行runner时本质是在docker容器中进行下载你在脚本中定义的镜像并启动镜像（有其他见解欢迎提出），然后再这个镜像执行你想要进行的操作（script)。
<p>
1. `uname -a`查看内核版本
![](./git-runner/uname-a.png)
本人使用的内核版本为3.10.0-957，安装的centos7，如较低版本请升级
2. `wget www.baidu.com` 测试能否访问外网(需要安装wget。安装命令:yum install -y wget)
![](./git-runner/wgetbaidu.png)
这里测试我的虚拟机是可以访问外网的。
如果不能访问外网请参考xxxxx进行解决。
</p>

## 准备工作

### 安装docker
	docker有两个版本:docker-ce和docker-ee。docker-ce对应社区版，docker-ee对应企业版。所以这里使用的duocker-ce社区版。(尽量用外网进行下载)
  ①.安装先决依赖
  `yum -y install yum-utils device-mapper-persistent-data lvm2`
  ![](./git-runner/dockerdependent.png)
  忽略一大波下载...
  ②.下载docker-ce的yum源到
      `wget http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo`
  ![](./git-runner/yumorigin.png)
  ③.使用yum安装docker-ce
  `yum -y install docker-ce`
  ![](./git-runner/installdocker.png)
  ④.启动docker并查看docker信息
  `systemctl start docker` 启动docker
  `docker info`查看docker信息
  ![](./git-runner/dockerinfo1.png)
  ![](./git-runner/dockerinfo2.png)

  最后显示的两个warning可以通过`vi /etc/sysctl.conf`
  文件结尾添加以下内容
  ```
  net.bridge.bridge-nf-call-ip6tables = 1
  net.bridge.bridge-nf-call-iptables = 1
  ```
  最后执行`sysctl -p`解决
  
### 拉取gitlab-runner镜像

因为我们没有配置私库所以这里使用的库都是docker公司的公共库。我们也可以浏览器访问docker公司镜像库地址进行搜索。我们拉取的都是docker官网的镜像所以最好配置一个加速器。如你还不会配置docker加速器可以参考[这里](./git-runner/daemon.json-config/配置私库和加速地址.md)进行配置

  a. 搜索gitlab-runner镜像.
  `docker search gitlab-runner`
  ![](./git-runner/searchrunner.png)
  第一个字段为imagename（镜像名字），第四个字段为official，是否为官方镜像，个人也可以把自己制作的镜像放到docker hub上，找到自己想要下载的镜像名字就可以拉取了。
  b. 这里拉取gitlab/gitlab-runenr镜像。
  ` docker pull gitlab/gitlab-runner`
  c. 运行gitlab-runner镜像 
  ```
  docker run -d --name gitlab-runner --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  gitlab/gitlab-runner
  ```
  这里参数一大堆可以通过编写docker-compose.yml使用docker-compose进行启动容器。如想尝试的可以自行学习。本教程不在进行增负。
  d. 查看运行的镜像
  `docker ps`
  ![](./git-runner/dockerrunnerps.png)

###  在工程中禁用默认的Shared Runners选项

> 项目->Setting->CI/CD->Runners

![](./git-runner/sharedrunnerrm.png)

> 查看Specific Runner的url和token令牌

![](./git-runner/specialtoken.png)

### 注册Specific Runner

 1. 进入runner容器内部。
 `docker exec -it gitlab-runner /bin/bash`
 ![](./git-runner/entrycontainer.png)
 2. 注册
  `gitlab-runner register`
 ![](./git-runner/runnerregisterissuex509.png)
 如果你到这一步出现和我一样的错误，那么我要恭喜你好的你开始踩这个过程的第一个坑了。这个问题如果你熟悉计算机网络协议的话那么你很快就能反应出来这个是因为https服务器访问时需要验证证书引起的。
 解决方案：
  a.访问web下载证书 b.转化成pem文件 c.将pem改成crt文件 
 3. 再次注册。这次我们换一种方式进行注册
 ```
     gitlab-runner register  --non-interactive   \
    --tls-ca-file=/opt/my.crt    \
    --url "https://gitlab.cae.com/"  \
    --registration-token "PxDzzTyphYACvKy6XbH8"   \
    --executor "docker"  \
    --docker-image maven:latest   \
    --description "runner-1 "   \
    --tag-list "runner_demo1"  \
    --run-untagged   \
    --locked="false"
```
![](./git-runner/registersuccess.png)
注册成功了 我们切到ci页面查看我们的runner
![](./git-runner/registerresult.png)

### 将runner应用到CI中

runner的应用特别简单只需要在`.gitlab-ci.yml`中配置`tags`节点即可。
  配置我们的runner
   ![](./git-runner/runnerapplication.png)
  这个时候在跑流水线就是我们自己的runner了
  
  
### 参考文档
gitlab-runner config.toml文件配置。https://docs.gitlab.com/runner/configuration/
gitlab-runner .gitlab-ci.yml配置。 https://docs.gitlab.com/ee/ci/yaml/README.html
x509 证书问题: https://blog.csdn.net/coreych/article/details/51393739
CI流水线无法克隆代码（无法访问gitlab库）问题：
```
Reinitialized existing Git repository in /builds/lij/pipelinedemo/.git/
fatal: unable to access 'https://gitlab-ci-token:[MASKED]@gitlab.cae.com/lij/pipelinedemo.git/': SSL certificate problem: unable to get local issuer certificate
```
参考：https://gitlab.com/gitlab-org/gitlab-runner/issues/2659
解决模板:
![](./git-runner/sslissueok.png)

