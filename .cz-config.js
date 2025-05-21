module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      bug修复' },
    { value: 'docs', name: 'docs:     文档更新' },
    { value: 'style', name: 'style:    代码格式调整(不影响代码运行)' },
    { value: 'refactor', name: 'refactor: 代码重构(既不修复bug也不增加功能)' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     测试相关' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退提交' },
    { value: 'build', name: 'build:    构建相关' }
  ],

  scopes: [
    { name: 'ui' },
    { name: 'api' },
    { name: 'auth' },
    { name: 'database' },
    { name: 'config' },
    { name: 'other' }
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'perf', 'refactor'],
  skipQuestions: ['body', 'footer'],

  messages: {
    type: '选择提交类型:',
    scope: '选择影响范围 (可选):',
    customScope: '输入自定义影响范围:',
    subject: '写一个简短的变更描述:\n',
    body: '提供更详细的变更描述 (可选). 使用 "|" 换行:\n',
    breaking: '列出任何不兼容变更 (可选):\n',
    footer: '列出此提交关闭的 issue (可选). 例如: #31, #34:\n',
    confirmCommit: '确认提交?'
  },

  subjectLimit: 100
};