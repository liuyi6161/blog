# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'update'

# 如果发布到 https://<USERNAME>.github.io
#git push -f https://github.com/liuyi6161/liuyi6161.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:liuyi6161/blog.git master

cd -