export default {
  wm: {
    commons: {
      clear: "清除",
      name: "名称",
      comments: "注释",
      please_select: "请选择",
      cut: "剪切",
      copy: "复制",
      paste: "粘贴",
      duplicate: "复写",
      enable: "启用",
      disable: "禁用",
      add: "添加",
      remove: "删除",
      insert: "插入上级",
    },
    assertions: {
      label: "断言",
      response: {
        label: "响应断言",
      }
    },
    configurations: {
      label: "配置",
      header_manager: {
        label: "请求头管理器",
        title: "发送参数",
        name: "名称",
        value: "值",
      }
    },
    controllers: {
      label: "控制器",
      if: {
        label: "条件控制器",
        expression: "表达式",
        expressionDesc: "表达式的结果必须为true或false",
        template: "表达式模板",
        useExpression: "将条件解释为变量表达式",
        evaluateAll: "对所有孩子生效",
        eq: "等于",
        ne: "不等于",
        gt: "大于",
        lt: "小于",
        like: "包含",
        notLike: "不包含",
        empty: "空",
        notEmpty: "非空",
        name: "变量名",
        value: "值"
      }
    },
    listeners: {
      label: "监听器",
      backend: {
        label: "后端监听器",
      }
    },
    post_processors: {
      label: "后置处理器",
      regex_extractor: {
        label: "正则提取器",
      }
    },
    pre_processors: {
      label: "前置处理器",
    },
    samplers: {
      label: "取样器",
      http: {
        label: "HTTP取样器",
        basic: "基础",
        advanced: "高级",
        web_server: "Web服务器",
        protocol: "协议",
        domain: "服务器名称或IP",
        port: "端口号",
        http_request: "HTTP请求",
        method: "方法",
        path: "路径",
        content_encoding: "内容编码",
        auto_redirects: "自动重定向",
        follow_redirects: "跟随重定向",
        use_keepalive: "使用Keepalive",
        do_multipart_post: "POST使用multipart/form-data",
        browser: "与浏览器兼容的头",
        arguments: "参数",
        body: "消息体",
        file: "文件上传",
        timeout: "超时（毫秒）",
        connect: "连接",
        response: "响应",
        send_arguments: "发送参数",
        name: "名称",
        value: "值",
        encode: "编码",
        content_type: "内容类型",
        use_equals: "包含等于"
      },
      tcp: {
        label: "TCP取样器",
      }
    },
    timers: {
      label: "计时器",
      constant: {
        label: "固定计时器",
        delay: "线程延迟(毫秒)"
      }
    },
    others: {
      thread_group: {
        label: "线程组",
      }
    },
  }
}
