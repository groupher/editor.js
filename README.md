## this repo is customized for groupher project usage

自定义部分在 groupher-custom 分支, master 分支和 codex 的 master 分支保持一致

1. cp ../editor-paragraph/dist/bundle.js src/components/tools/paragraph/dist/ (将 paragraph 工具的二进制放到项目目录下)
2. 增加 codex 分支 git remote add codex https://github.com/codex-team/editor.js.git
3. git remote set-url --push codex DISABLE
4. 拉取 codex master 分支: git pull codex master
5. git checkout groupher-custom && git rebase master
