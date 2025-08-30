'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')

  const navigation = [
    { id: 'overview', name: '项目概述' },
    { id: 'team', name: '团队架构' },
    { id: 'market', name: '市场定位' },
    { id: 'tech', name: '技术架构' },
    { id: 'operation', name: '运营流程' },
    { id: 'marketing', name: '营销策略' },
    { id: 'finance', name: '财务规划' },
    { id: 'timeline', name: '时间轴' },
    { id: 'risk', name: '风险控制' },
    { id: 'action', name: '行动计划' }
  ]

  const teamMembers = [
    { name: '徐昊', role: 'CEO/技术负责人', responsibility: '整体战略、技术研发、产品规划', equity: '35%' },
    { name: '徐铠', role: 'COO/运营负责人', responsibility: '日常运营、客户服务、营销推广', equity: '20%' },
    { name: '郝赫然', role: 'CMO/市场负责人', responsibility: '品牌建设、内容营销、社媒运营', equity: '15%' },
    { name: '张黎明', role: '供应链负责人', responsibility: '产品采购、质量控制、供应商管理', equity: '15%' },
    { name: '小剑舅舅', role: '美国运营负责人', responsibility: '仓储物流、本地化运营、线下拓展', equity: '15%' }
  ]

  const milestones = [
    { phase: 'Phase 1', period: '第1-2个月', name: '筹备期', tasks: ['完成团队组建和股权协议', '注册美国公司和相关资质', '完成产品选品和供应商对接', '搭建MVP版本独立站'] },
    { phase: 'Phase 2', period: '第3-4个月', name: '测试期', tasks: ['上线50-100个SKU', '开始小规模广告投放测试', '收集用户反馈优化产品', '建立基础运营流程'] },
    { phase: 'Phase 3', period: '第5-8个月', name: '增长期', tasks: ['扩展到200-500个SKU', '月销售额突破$100,000', '上线AI功能模块', '建立会员体系'] },
    { phase: 'Phase 4', period: '第9-12个月', name: '扩张期', tasks: ['开发自有品牌产品', '探索线下渠道合作（Target等）', '月销售额突破$200,000', '考虑融资扩张'] }
  ]

  const financialPlan = [
    { period: '1-3月', revenue: '$10,000-30,000', profit: '-20%' },
    { period: '4-6月', revenue: '$50,000-80,000', profit: '5%' },
    { period: '7-12月', revenue: '$100,000-200,000', profit: '15%' },
    { period: '第二年', revenue: '$300,000-500,000', profit: '20%' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Optima Shop 商业计划书
            </h1>
            <div className="text-sm text-gray-500">2025年1月</div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-lg h-screen sticky top-16 overflow-y-auto">
          <nav className="p-4">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition ${
                  activeSection === item.id
                    ? 'bg-primary-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Project Overview */}
          {activeSection === 'overview' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">项目概述</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">项目背景</h3>
                  <p className="text-gray-600 leading-relaxed">
                    面向美国市场的电商独立站，充分利用中美两地的资源优势，打造具有供应链优势和技术创新能力的跨境电商平台。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">核心优势</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">供应链优势</h4>
                      <p className="text-blue-700 text-sm">广东地区深度供应链资源，成本控制能力强</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">物流仓储优势</h4>
                      <p className="text-green-700 text-sm">美国本土仓储配送，快速履约，可拓展线下渠道</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">技术创新优势</h4>
                      <p className="text-purple-700 text-sm">自主研发能力，AI赋能，差异化竞争</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">团队协同优势</h4>
                      <p className="text-orange-700 text-sm">中美团队配合，本地化运营</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Team Structure */}
          {activeSection === 'team' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">团队架构与分工</h2>
                
                <div className="grid gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-primary-600 font-medium">{member.role}</p>
                          <p className="text-gray-600 text-sm mt-2">{member.responsibility}</p>
                        </div>
                        <div className="ml-4">
                          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {member.equity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Market Positioning */}
          {activeSection === 'market' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">市场定位与产品策略</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">目标市场</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">主要市场：美国中产家庭（25-45岁）</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">地理范围：初期聚焦东西海岸主要城市，后期扩展至全美</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">产品选品策略</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-800">第一阶段（0-6个月）：测试期</h4>
                        <ul className="mt-2 space-y-1 text-gray-600">
                          <li>• 家居生活用品：高频刚需，易于起量</li>
                          <li>• 3C数码配件：利润率高，供应链成熟</li>
                          <li>• 运动户外用品：美国市场需求大</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-800">第二阶段（6-12个月）：聚焦期</h4>
                        <p className="mt-2 text-gray-600">根据数据反馈，聚焦1-2个核心品类深耕</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-800">第三阶段（12个月后）：扩张期</h4>
                        <p className="mt-2 text-gray-600">横向扩展相关品类，打造品牌矩阵</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">定价策略</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ 采用中高端定位，避免低价竞争</li>
                        <li>✓ 产品定价比亚马逊同类产品高10-20%</li>
                        <li>✓ 通过品质和服务体现价值</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tech Architecture */}
          {activeSection === 'tech' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">技术架构规划</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">独立站技术栈</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                      <div>前端：Next.js + React + Tailwind CSS</div>
                      <div>后端：Node.js + Express/Nest.js</div>
                      <div>数据库：PostgreSQL + Redis</div>
                      <div>支付：Stripe + PayPal</div>
                      <div>云服务：AWS/Google Cloud</div>
                      <div>CDN：Cloudflare</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">核心功能模块</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-primary-600 mb-2">基础功能</h4>
                        <p className="text-sm text-gray-500 mb-2">第1-2个月完成</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 用户注册/登录系统</li>
                          <li>• 产品展示与搜索</li>
                          <li>• 购物车与结算流程</li>
                          <li>• 订单管理系统</li>
                          <li>• 支付集成</li>
                          <li>• 基础CMS后台</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-green-600 mb-2">AI增值功能</h4>
                        <p className="text-sm text-gray-500 mb-2">第3-6个月完成</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• AI客服助手</li>
                          <li>• 个性化推荐</li>
                          <li>• 智能定价</li>
                          <li>• 虚拟试用</li>
                          <li>• 评论分析</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-purple-600 mb-2">运营工具</h4>
                        <p className="text-sm text-gray-500 mb-2">第4-6个月完成</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 库存管理系统</li>
                          <li>• 物流跟踪集成</li>
                          <li>• 数据分析仪表板</li>
                          <li>• 营销自动化工具</li>
                          <li>• 会员积分系统</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Operation Process */}
          {activeSection === 'operation' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">运营流程设计</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">供应链流程</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex flex-col space-y-3">
                        {['供应商筛选（张黎明）', '样品测试与质检', '小批量采购测试', '数据分析与反馈', '批量采购与备货', '发货至美国仓库（小剑舅舅）', '本地配送/线下铺货'].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="ml-3 text-gray-700">{step}</div>
                            {index < 6 && <div className="ml-auto text-gray-400">↓</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">订单履约流程</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">快速履约模式</h4>
                        <p className="text-blue-700">美国仓库直发，2-3天送达</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">经济履约模式</h4>
                        <p className="text-green-700">中国直邮，10-15天送达（特殊商品）</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">客户服务体系</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">AI客服处理80%常规问题</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">人工客服处理复杂问题和投诉</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">建立VIP客户专属服务通道</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Marketing Strategy */}
          {activeSection === 'marketing' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">营销推广策略</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">流量获取渠道</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-3">付费渠道（前期主力）</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Google Ads：搜索广告+购物广告</li>
                          <li>• Facebook/Instagram广告：精准定向</li>
                          <li>• TikTok广告：年轻用户群体</li>
                          <li>• 网红合作：KOL/KOC营销</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">免费渠道（长期建设）</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• SEO优化：内容营销+技术优化</li>
                          <li>• 社交媒体运营：建立品牌社群</li>
                          <li>• 邮件营销：会员维护</li>
                          <li>• 内容营销：博客、视频教程</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">品牌建设</h3>
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ 打造独特品牌故事</li>
                        <li>✓ 建立品牌视觉识别系统</li>
                        <li>✓ 注册美国商标保护</li>
                        <li>✓ 参与行业展会和活动</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Financial Planning */}
          {activeSection === 'finance' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">财务规划</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">启动资金需求（预估）</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">技术开发</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">首批库存</span>
                          <span className="font-semibold">$100,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">营销推广</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">运营成本</span>
                          <span className="font-semibold">$30,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">预备金</span>
                          <span className="font-semibold">$20,000</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <div className="flex justify-between">
                            <span className="text-gray-900 font-semibold">总计</span>
                            <span className="text-primary-600 font-bold text-xl">$250,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">收入预测</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时期</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">月销售额目标</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">净利润率</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {financialPlan.map((item, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.period}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{item.revenue}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  item.profit.startsWith('-') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                }`}>
                                  {item.profit}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">盈亏平衡点</h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="text-yellow-800">预计第6-8个月实现盈亏平衡</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Timeline */}
          {activeSection === 'timeline' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">时间轴与里程碑</h2>
                
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{milestone.phase}: {milestone.name}</h3>
                            <span className="ml-3 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{milestone.period}</span>
                          </div>
                          <ul className="space-y-1">
                            {milestone.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-center text-gray-700">
                                <input type="checkbox" className="mr-2" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Risk Control */}
          {activeSection === 'risk' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">风险控制</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">主要风险及应对</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险类型</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">具体风险</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">应对措施</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">市场风险</td>
                            <td className="px-6 py-4 text-sm text-gray-700">竞争激烈，获客成本高</td>
                            <td className="px-6 py-4 text-sm text-gray-700">差异化定位，技术创新</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-orange-600">供应链风险</td>
                            <td className="px-6 py-4 text-sm text-gray-700">质量问题，断货风险</td>
                            <td className="px-6 py-4 text-sm text-gray-700">多供应商策略，严格质检</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-yellow-600">政策风险</td>
                            <td className="px-6 py-4 text-sm text-gray-700">贸易政策变化</td>
                            <td className="px-6 py-4 text-sm text-gray-700">关注政策，灵活调整</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-purple-600">资金风险</td>
                            <td className="px-6 py-4 text-sm text-gray-700">现金流断裂</td>
                            <td className="px-6 py-4 text-sm text-gray-700">控制库存，预留资金</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">技术风险</td>
                            <td className="px-6 py-4 text-sm text-gray-700">系统故障，数据安全</td>
                            <td className="px-6 py-4 text-sm text-gray-700">备份机制，安全防护</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">退出策略</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">整体出售给战略投资者</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">管理层回购（MBO）</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">寻求并购机会</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Action Plan */}
          {activeSection === 'action' && (
            <section className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">近期行动计划（30天内）</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">第一周</h3>
                      <ul className="space-y-2 text-blue-800">
                        <li>1. 召开合伙人会议，确定股权结构和责任分工</li>
                        <li>2. 张黎明开始筛选首批供应商（3-5家）</li>
                        <li>3. 徐昊开始搭建技术框架</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">第二周</h3>
                      <ul className="space-y-2 text-green-800">
                        <li>1. 注册美国公司（小剑舅舅协助）</li>
                        <li>2. 开设美国银行账户和支付账户</li>
                        <li>3. 确定首批测试产品（20-30个SKU）</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">第三周</h3>
                      <ul className="space-y-2 text-purple-800">
                        <li>1. 完成独立站基础功能开发</li>
                        <li>2. 郝赫然制定品牌VI和内容策略</li>
                        <li>3. 徐铠制定运营SOP流程</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-orange-900 mb-4">第四周</h3>
                      <ul className="space-y-2 text-orange-800">
                        <li>1. 网站内测和优化</li>
                        <li>2. 首批产品拍摄和上架</li>
                        <li>3. 制定营销推广计划</li>
                        <li>4. 团队培训和磨合</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">成功关键因素</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-800">快速迭代</h4>
                      <p className="text-primary-700 text-sm mt-1">小步快跑，根据数据快速调整</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800">用户至上</h4>
                      <p className="text-blue-700 text-sm mt-1">重视用户反馈，持续优化体验</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800">数据驱动</h4>
                      <p className="text-green-700 text-sm mt-1">建立完善的数据分析体系</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800">团队协同</h4>
                      <p className="text-purple-700 text-sm mt-1">中美团队高效配合</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800">技术创新</h4>
                      <p className="text-orange-700 text-sm mt-1">持续投入AI等新技术应用</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800">品牌建设</h4>
                      <p className="text-pink-700 text-sm mt-1">从第一天开始建设品牌资产</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">联系方式</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>项目负责人：徐昊</p>
                    <p>启动时间：2025年1月</p>
                    <p>首次合伙人会议：建议本周内召开</p>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>本计划书为初版，将根据实际情况持续更新优化</p>
                    <p>更新日期：2025年1月</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}