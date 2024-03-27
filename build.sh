###
 # @Author: shiqi liziw2012@gmail.com
 # @Date: 2024-03-27 16:43:48
 # @LastEditors: shiqi liziw2012@gmail.com
 # @LastEditTime: 2024-03-27 16:46:15
 # @FilePath: /next-app/build.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 
project_name="next-app"
image_name=${project_name}
image_name_gz=${project_name}".image.tar.gz"
port=3008

docker build --platform linux/amd64 --pull --rm -f "Dockerfile" -t ${image_name}:latest "." 

docker save ${image_name} | gzip > ${image_name_gz}


echo docker tag ${image_name}:latest ${image_name}:old
echo docker load -i ${image_name_gz}
echo docker run -d --name ${project_name} -p ${port}:3000 ${image_name}