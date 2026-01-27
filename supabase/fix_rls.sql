-- 修复 RLS 策略 - 开发模式下允许所有操作
-- 请在 Supabase SQL Editor 中运行此脚本

-- 删除旧的限制性策略
DROP POLICY IF EXISTS "Authenticated users can manage articles" ON articles;
DROP POLICY IF EXISTS "Authenticated users can manage tools" ON tools;

-- 创建允许所有操作的策略（开发阶段）
CREATE POLICY "Allow all operations on articles" ON articles
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations on tools" ON tools
  FOR ALL USING (true) WITH CHECK (true);

-- 注意：上线前请删除这些策略，替换为需要认证的策略
