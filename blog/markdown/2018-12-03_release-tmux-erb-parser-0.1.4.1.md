---
title: tmux-erb-parser 0.1.4.1 をリリースしました
created_at: 2018-12-03
---

## tmux-erb-parser 0.1.4.1 をリリースしました

Github: [tmux-erb-parser](https://epaew.github.io/tmux-erb-parser/)

今回のリリースでは、`winfow-status-format` 等で利用可能な、いくつかのヘルパーメソッドを追加しました。

今回のリリースで追加したヘルパーメソッドを利用して、  
私の使っている `tmux.conf` の一部を書き換えたものを以下に掲載してみます。  
設定したい内容としては、
* 当該 `pane` 内で実行されているコマンドを `pane-border` に表示する
* しかし `pane_current_command` だと引数やサブコマンドが表示されないため、  
  ssh/sudo の場合は `ps` を実行した結果から引数付きの実行内容を取得し、表示する
* `ssh` 実行時（条件分岐が面倒だったので `sudo` 時も）は、文字色と背景を反転する

実際の設定内容はこちら。
- before
  ```tmux
  set -g pane-border-format \
      "#{?#{||:#{==:#{pane_current_command},ssh},#{==:#{pane_current_command},sudo}},#[fg=white bg=red],} #P:#{?#{||:#{==:#{pane_current_command},ssh},#{==:#{pane_current_command},sudo}},#(ps -o command -t #{pane_tty} | grep -E \'^#{pane_current_command}\' | tail -n1),#{pane_current_command}} (#(echo #{pane_current_path} | sed \'s,$HOME,~,\')) "
  ```
- after
  ```tmux
  <%
    with_args = format_or(format_cond('==', '#{pane_current_command}', 'ssh'),
                          format_cond('==', '#{pane_current_command}', 'sudo'))
    cmd_info = format_if(with_args,
                         '#(ps -o command -t #{pane_tty} | grep -E \'^#{pane_current_command}\' | tail -n1)',
                         '#{pane_current_command}')
    short_pwd = '#(echo #{pane_current_path} | sed \'s,$HOME,~,\')'
    border_format =
      "#{format_if(with_args, '#[fg=white bg=red]')} #P:#{cmd_info} (#{short_pwd}) "
  %>
  set -g pane-border-format "<%= border_format %>"
  ```
前者でも目的は達成できますが、正直今後メンテし続けていく気にはなれませんね。。  
特に `#{||:cond1,cond2}` の構文は可変長引数をとれないので、  
今後「ssh/sudo以外も対象にしたい」となった場合、再帰的に条件を書く必要があり、今以上に複雑度が高くなります。

後者は適度に変数に分かれているので、まだメンテしていくのが楽に見えます。  
また、`format_or()/format_and()` は可変長引数を取れるように実装しているので、  
今後対象にしたいコマンドが増えたとしても、そこまで複雑度は上がらないと思われます。

ただ erb を使って書いた場合の難点としては、Ruby の `#{}` と tmux の `#{}` が入り交じることになるので、  
これはこれでそれなりにややこしい感じにはなってしまうことでしょうか。  
ここは Ruby 側の `#{}` を使わない（`String#+` や `String#<<` 等で頑張る）以外に解決策が思いつかないですね。  
何かいい方法があったら教えてください。

それでは。
