---
title: 实用功能
lang: zh-CN
---
# 实用功能
## 汇率换算
将指定货币金额换算成人民币、美元、日元。如果是外币，同时按民生银行、兴业银行的汇率计算。
### 示例
```
汇率usd1
```
### 响应
```
CNY 6.52388
JPY 103.24272
CMBC CNY 6.5384000
CIB CNY 6.5418
```

## IP 归属地查询
查询 IP 归属地。IPv4 数据来自 [IPIP](https://www.ipip.net/document/api_city.html)，IPv6 数据来自 [ip.zxinc.org](https://ip.zxinc.org/ipquery/)。
### 示例
```
ip 2404:6800:400a:809::2004
```
### 响应
```
日本大阪府 Google Inc. 服务器网段
```

## 日本新冠数据
发送 https://toyokeizai.net/sp/visual/tko/covid19/index.html 上半部分的截图。
### 示例
```
日本完了吗
```

## 美国新冠数据
发送 https://www.nytimes.com/interactive/2021/us/covid-cases.html 部分截图。
### 示例
```
美国完了吗
```