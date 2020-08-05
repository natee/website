#!/bin/sh

read -p "输入git 提交信息：" msg 

npm run build

if [ $? -ne 0 ]; then
    echo "\033[31m \n 【构建失败！！！】【构建失败！！！】【构建失败！！！】  \033[0m"
    exit 1
else
    echo "\033[32m \n 【构建成功，准备替换线上包...】 \033[0m"
fi

commit_message="$msg"
git add ./
git commit -m "$commit_message"
git push origin master

echo "上线完成!"
exit
eof