# grass-track

牧场管理系统

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Commit Changes

提交规范遵循 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

添加了 `husky` 和 `commitlint`，在提交时会自动检查提交信息是否符合规范。

添加了 `lint-staged`，在提交时会自动检查代码是否符合规范。

### Commit Message Format

```sh
git add .
git commit -m "feat: add xxx"
```

使用`git cz`或者`bun cz`代替`git commit -m "xxx"`，可以使用交互式命令行工具来生成提交信息。

```sh
$ git add .
$ git cz
? 选择你要提交的类型 : Use arrow keys or type to search
❯ feat:     新增功能 | A new feature
  fix:      修复缺陷 | A bug fix
  docs:     文档更新 | Documentation only changes
  style:    代码格式 | Changes that do not affect the meaning of the code
  refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature
  perf:     性能提升 | A code change that improves performance
  test:     测试相关 | Adding missing tests or correcting existing tests
```

或者全局安装 `commitizen`，使用 `git cz` 代替 `git commit -m "xxx"`。

```sh
npm install -g commitizen
```

可以参考[cz-git](https://cz-git.qbb.sh/zh/)

### Push to Remote

```sh
git push origin main
```
