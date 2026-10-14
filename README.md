# 孙哥，聊两句

有人甩来一句「你不就是会炒作吗」，把这话丢给这个skill，看看孙哥会怎么接。

我们从孙宇晨的公开访谈里整理了一些思路和说话习惯。你可以跟它聊，也可以拿来写访谈、试角色台词。默认带点整活，会接梗、会把视角拉大，也会认错。想更夸张就说「整活一点」，想聊正事就说「严肃点」。

去AI味的短规则已经放进主skill。回复写好后再过一遍，少讲套话，别把普通聊天写成创业宣言。日常只读一个短入口，详细资料需要时再翻。

## 先丢个问题进来

让AI读取 [孙哥skill](skills/sun-ge-persona/SKILL.md)，然后直接给场景。可以复制这句试试。

> 读取这个项目里的 sun-ge-persona skill。用孙哥的思路回我：我刚做了一个产品，有人说我只会炒作。直接聊几句，项目数据没给你，别编。

也可以接着问「那产品没人用呢？」或者「有钱以后，也会有想不明白的事吗？」看看它的回应会不会跟着变。

下面这段是原创模拟。

> 宣传能让人看见一个项目，接下来还得看它好不好用。这个没证明，你质疑就有道理。哪一步不好用，你拿出来，我们就聊那一步。你现在问的是项目有什么用，我就得回答这个，不能只讲以后会怎么样。

## 放到你用的AI里

把 `skills` 里的 `sun-ge-persona` 和 `sun-ge-humanizer` 两个文件夹一起放进工具的技能目录，保持它们相邻，里面的参考文件也带上。日常聊天用主skill就够了；单独细修台词时再叫后者。

工具不支持安装skill的话，也可以把整个项目交给AI，让它从 [SKILL.md](skills/sun-ge-persona/SKILL.md) 开始读。

[人物模型](skills/sun-ge-persona/references/persona-model.md) 和 [几段试写](skills/sun-ge-persona/references/examples.md) 都在这里，感兴趣可以翻翻。去AI味的 [原包](skills/sun-ge-humanizer/references/unclecheng-original/SKILL.md) 完整保留，也写了 [适配说明](skills/sun-ge-humanizer/references/adaptation.md)。

## 这版做到哪儿了

目前是0.2版，主入口做了压缩，增加了整活的空间。资料仍是2019到2026年的八组公开表达材料，核验日期为2026年10月14日。具体采访和读取情况都放在 [来源记录](skills/sun-ge-persona/references/sources.md) 里。

这次主要读的是访谈文字和转写稿，没有实际听看原片。所以先做到了思路和文字表达这一层，声音、语速、表情还没核。B站和YouTube有原片入口，抖音目前只有待核链接。

它生成的是创作台词。孙宇晨本人会不会在同样的场景下这样回答，得继续拿原始材料来对照。这是一个非官方项目。

如果你发现「这句话就不像他」，欢迎带着原片链接和时间点来提意见。尤其想补他被连续追问、改口、普通闲聊时的片段。怎么记录样本，可以看 [这份方法](skills/sun-ge-persona/references/sampling-guide.md)；已经试过哪些问题，也留了 [题目](evals/cases.md) 和 [记录](evals/report.md)。

项目原创部分用 [MIT许可](LICENSE)。去AI味原包的来源和许可情况另放在 [第三方说明](THIRD_PARTY_NOTICES.md)，原访谈的版权归各自作者。
