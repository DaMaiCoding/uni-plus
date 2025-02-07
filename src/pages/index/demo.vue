<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "请求测试页面",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
}
</route>

<template>
  <div>
    <button @click="getTest">GET 请求</button>
    <button @click="postTest">POST 请求</button>
    <button @click="cancelRequest">取消 请求</button>
    <button @click="awaitToJs">awaitToJs</button>
  </div>
</template>

<script setup lang="ts">
import { awaitToJsTestApi, getTestApi, postTestApi } from '@/api/testApi'

// GET 请求
const getTest = async () => {
  const res = await getTestApi({ name: 'uni-lin' })
  console.log(res)
}

// POST 请求
let requestTask = null
const postTest = () => {
  requestTask = postTestApi({ name: 'uni-lin' }, { id: '123456' })
  requestTask
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// 取消 请求
const cancelRequest = () => {
  // 取消请求
  requestTask.abort()
}

/* await-to-js 代替 try catch 用法，根据实际需求进行使用 */
const awaitToJs = async () => {
  const [data, err] = await awaitToJsTestApi({ name: 'uni-lin' })
  if (data) {
    console.log(data)
  }
  if (err) {
    console.log(err)
  }
}
</script>
