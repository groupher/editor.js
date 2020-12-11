## this repo is customized for groupher project usage

自定义部分在 groupher-custom 分支, master 分支和 codex 的 master 分支保持一致

1. yarn pull_tools
2. 增加 codex 分支 git remote add codex https://github.com/codex-team/editor.js.git
3. git remote set-url --push codex DISABLE
4. 拉取 codex master 分支: git pull codex master
5. git checkout groupher-custom && git merge --no-ff master
