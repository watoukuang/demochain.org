## GitHub 认证方法
### 方法一：使用 SSH 密钥

1. **生成 SSH 密钥**：
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
   - 按提示操作，默认生成在 `~/.ssh/id_rsa` 和 `~/.ssh/id_rsa.pub`

2. **添加 SSH 密钥到 ssh-agent**：
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_rsa
   ```

3. **将 SSH 公钥添加到 GitHub**：
   - 登录 GitHub
   - 进入 Settings > SSH and GPG keys
   - 点击 New SSH key
   - 粘贴 `~/.ssh/id_rsa.pub` 的内容

4. **测试连接**：
   ```bash
   ssh -T git@github.com
   ```

### 方法二：使用个人访问令牌（PAT）

1. **生成个人访问令牌**：
  - 登录 GitHub
  - 进入 Settings > Developer settings > Personal access tokens
  - 点击 Generate new token
  - 选择所需权限并生成令牌

2. **使用令牌进行 Git 操作**：
   ```bash
   git clone https://github.com/username/repo.git
   ```
  - 当提示输入用户名和密码时：
    - 用户名：GitHub 用户名
    - 密码：生成的令牌
