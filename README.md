# 孙哥人物 Skill

把孙宇晨（Justin Sun，孙哥）的公开表达提炼成可复用的人物模型：**怎样判断事情 → 怎样回应别人 → 情绪如何变化 → 怎样说出来**。

重点是人物反应的连贯性。适合角色聊天、访谈脚本、情境演绎和类似表达风格的原创文案。默认再经过用户提供规则适配的**去AI味步骤**，最终只给自然的成品。基于公开样本的创作项目，非本人或官方作品。

## 直接使用

完整技能入口：[skills/sun-ge-persona/SKILL.md](skills/sun-ge-persona/SKILL.md)。使用时让AI读取它及引用的相关文件，再给一个具体场景。它默认调用 [sun-ge-humanizer](skills/sun-ge-humanizer/SKILL.md)，无需每次再说“去AI味”。

例如：

> 读取这个项目的 sun-ge-persona skill。模拟孙哥：有人说你只会炒作，你怎么回应？自然访谈强度，150字；场景没有提供项目数据。

> 用孙哥人物模型和我对话：我正在做AI视频，担心入场太晚。直接回应，保持多轮人物一致性。

> 用这个人物模型写一次失败后的回复。允许承认执行错误，不要写成永远成功。

在支持技能目录的工具中，把 `skills` 下的 **sun-ge-persona 与 sun-ge-humanizer 两个完整文件夹**一起放进对应的技能目录；保持它们相邻，保留各自的参考文件。也可直接将整个项目提供给AI读取。

## 包含什么

- [SKILL.md](skills/sun-ge-persona/SKILL.md)：调用条件、人物核心、回复过程、情绪切换与输出约定。
- [人物模型](skills/sun-ge-persona/references/persona-model.md)：六个机制、对话记忆、情绪触发与强度控制。
- [原创示例](skills/sun-ge-persona/references/examples.md)：质疑、机会、认同、失败、私人失落、追问事实与闲聊。
- [来源记录](skills/sun-ge-persona/references/sources.md)：8组公开表达材料，标明一手、整理、转写和实际读取范围。
- [补充样本方法](skills/sun-ge-persona/references/sampling-guide.md)：从新视频继续提炼规则，避免误归属与平台刻板印象。
- [孙哥去AI味](skills/sun-ge-humanizer/SKILL.md)：人物输出的默认润色步骤，保留判断与情绪，删套话和机械结构。
- [用户提供的原Humanizer](skills/sun-ge-humanizer/references/unclecheng-original/SKILL.md)：原包五个文件完整保留；[适配说明](skills/sun-ge-humanizer/references/adaptation.md)记录人物保真与通用编辑规则的衔接。
- [试用题](evals/cases.md)与[验证记录](evals/report.md)：检查模型能否在不同情境下稳定使用。

## 这版模型的范围

初版0.1，资料核验日期2026-10-14。覆盖2019—2026年的中文问答、英文采访和公开节目文字稿。B站与YouTube有原片入口和文字定位；抖音候选尚未核到有效内容，未据此编造平台特征。

研究没有实际观看或收听音视频，因此本版先建立**判断逻辑、语言结构与文字呈现的情绪反应**。音色、语速、笑声、表情要继续回看原片。人物规则是创作推断；本人自述和预测不自动变成已核实事实。

## 协作更新

提交新样本时带原始链接、时间范围、说话人归属与实际读取层级。指出规则的反例也很有价值：应补充情境，不应把人物写成单一性格。AI生成的示例和总结不当作新证据。

原创技能说明、适配规则和示例采用 [MIT License](LICENSE)。用户提供的原Humanizer保留原有来源声明，未重新赋予MIT许可，详见 [第三方说明](THIRD_PARTY_NOTICES.md)。被链接的访谈、音视频与文字稿权利属于原作者，未随仓库重新分发。
