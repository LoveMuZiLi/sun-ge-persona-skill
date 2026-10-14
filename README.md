![孙哥上号 · 你来发问，他来接招](https://raw.githubusercontent.com/LoveMuZiLi/sun-ge-persona-skill/main/assets/readme-banner.svg)

<p align="center">
  <img src="https://raw.githubusercontent.com/LoveMuZiLi/sun-ge-persona-skill/main/assets/readme-badges.svg?v=2" alt="v0.2 · 958字符 · 一个日常入口 · 非官方原创模拟" width="772" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/sun-ge-persona-skill"><b>📦 npm 下载</b></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/SKILL.md"><b>⚡ 让孙哥上号</b></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/references/examples.md">🗣 看他怎么接话</a>
  &nbsp; · &nbsp;
  <a href="https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/references/sources.md">🔎 翻翻出处</a>
</p>

---

有人甩来一句「你不就是会炒作吗」，把这话丢过来，看看孙哥怎么接。

这份skill从孙宇晨的公开表达里整理思路和说话习惯。能接梗，能把视角拉大，也能认错。你可以拿它聊天、写访谈，或者试一段有点锋芒的角色台词。

日常只读一个短入口，详细资料需要时再翻。

## 📦 一条命令，孙哥上号

已经上架 [npm：sun-ge-persona-skill](https://www.npmjs.com/package/sun-ge-persona-skill)。电脑上有 Node.js 18 或更高版本，就在你的项目目录里运行：

```sh
npx --yes sun-ge-persona-skill
```

两个 skill 会一起放进当前项目的 `.agents/skills/`。已有同名文件夹时会停下来，先留住你原来的版本。

想放到别的技能目录，就把路径告诉它：

```sh
npx --yes sun-ge-persona-skill --dir "你的技能目录"
```

<details>
<summary><b>🍺 用 brew 的朋友，从这里开始</b></summary>

macOS / Linux 上，可以先用 [Homebrew 安装 Node](https://formulae.brew.sh/formula/node)，自带 npm 和 npx，再安装 skill：

```sh
brew install node
npx --yes sun-ge-persona-skill
```

已有 Node 的话，直接跑第二条。当前没有 `brew install sun-ge-persona-skill` 的直接入口；这里用 brew 装 Node，再从 npm 安装 skill。Windows 原生终端直接用上面的 npx 命令即可，前提是已经装好 Node。

</details>

<details>
<summary><b>📥 只想下载文件，不用安装器</b></summary>

装到项目依赖里，之后自行复制技能文件：

```sh
npm install sun-ge-persona-skill
```

完整技能在 `node_modules/sun-ge-persona-skill/skills/`，下载后可以自行复制。

只拿压缩包：

```sh
npm pack sun-ge-persona-skill
```

会在当前目录得到 `.tgz` 文件。也可以[直接下载 GitHub ZIP](https://github.com/LoveMuZiLi/sun-ge-persona-skill/archive/refs/heads/main.zip)。解压后，把 `skills` 下的两个完整文件夹放进工具的技能目录，保持相邻，参考文件也带上：

```text
skills/
├── sun-ge-persona/      ← 日常聊天，从这里开始
└── sun-ge-humanizer/    ← 单独细修已有台词时用
```

工具不支持安装 skill 的话，把整个项目交给 AI，让它从 [SKILL.md](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/SKILL.md) 开始读也可以。

</details>

安装包本身不调用模型；把 skill 交给你用的 AI，再开始聊。平时不用先读完资料库。

## 🎬 看孙哥在线接招

深色玻璃聊天窗，青色和紫色点缀。问题一个字一个字敲进去，模型读取当前 skill，回答边生成边出现；继续追问，再从整活切到认真聊。

横版是实际模型对话的录屏，较长的等待已剪短。竖版重放同一段对话，方便在手机上看。界面里的「孙哥」是非官方角色模拟。

[![孙哥上号：输入、追问，切换聊天语气](https://raw.githubusercontent.com/LoveMuZiLi/sun-ge-persona-skill/main/docs/showcase/demo.gif?v=chat2)](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/docs/showcase/demo-wide.mp4)

[下载竖版视频](https://raw.githubusercontent.com/LoveMuZiLi/sun-ge-persona-skill/main/docs/showcase/demo.mp4) · [下载横版录屏](https://raw.githubusercontent.com/LoveMuZiLi/sun-ge-persona-skill/main/docs/showcase/demo-wide.mp4) · [查看完整对话](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/docs/showcase/transcript.md) · [复制分享文案](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/docs/share-copy.md)

头像与展示媒体的来源、许可见[素材说明](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/docs/showcase/media-credits.md)。

## ⚡ 直接开聊

让AI读取 [孙哥skill](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/SKILL.md)，把下面这段丢给它。

```text
用 sun-ge-persona 回我。
孙哥，我刚做了一个产品，有人说我只会炒作，你怎么接？
直接聊几句，项目数据没给你，别编。
```

> **你** · 你不就是会炒作吗？
>
> **孙哥 · 原创模拟**
>
> 行，这顶帽子我先戴着。可你都进来了，咱们顺手把产品打开？哪儿不好用，先从那儿聊。

<details>
<summary><b>🗣 换个问题，再来两句</b></summary>

<br />

> **你** · 我新做的产品没人用，整活一点回我。
>
> **孙哥 · 原创模拟**
>
> 先别给产品开追悼会。找一个你真想服务的人，问他愿不愿意试。愿意，就看他用起来卡在哪里；不愿意，就听听原因。两句话还没问完，别急着替产品宣布退役。

> **你** · 有钱以后，也会有想不明白的事吗？
>
> **孙哥 · 原创模拟**
>
> 会吧。有些问题，条件都摆齐了，你还是不知道自己想选哪个。钱能多给几个选项，替你选不了。没想明白就先留着，我也不见得马上能说清楚。

</details>

## 🎛 想怎么聊，你来定

**「整活一点」**，夸张类比和接梗可以多一点。

**「严肃点」**，收起花活，把眼前的问题讲清楚。

默认就在中间，带点孙哥味。别让它逢人就开发布会，普通闲聊也可以只回两句。

## 🧩 这版还欠什么

现在是 **v0.2**。主入口压到 **958字符**，详细资料按需读；整活的空间也留了。

资料是2019到2026年的八组公开表达材料，核验日期为2026年10月14日。这次主要读的是访谈文字和转写稿，没有实际听看原片。声音、语速和表情还没核，抖音也只有待核链接。具体情况都记在 [来源记录](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/references/sources.md) 里。

如果你看完觉得「这句不像他」，欢迎带着原片链接和时间点来提意见。尤其想补被连续追问、改口、普通闲聊时的片段。

<details>
<summary><b>🔎 资料和试写，都留着</b></summary>

- [人物档案](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/references/persona-model.md)，深挖时再读。
- [几段试写](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/references/examples.md)，看看不同场景怎么接。
- [补样方法](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/skills/sun-ge-persona/references/sampling-guide.md)，新材料怎么记。
- [试用题](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/evals/cases.md)与[验证记录](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/evals/report.md)，已经检查过什么。

</details>

---

用着顺手，右上角点个 **Star**，方便下次找回来。想分享给朋友，这里有[短片和文案](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/docs/share-copy.md)。

<p align="center"><b>非官方项目 · 基于公开表达的原创模拟</b></p>

这里的台词都是创作，不能当作孙宇晨本人说过的话。原创 skill 和代码用 [MIT许可](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/LICENSE)，含头像的演示视频、GIF和截图按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 分享。具体来源和范围见 [第三方说明](https://github.com/LoveMuZiLi/sun-ge-persona-skill/blob/main/THIRD_PARTY_NOTICES.md)。原访谈的版权归各自作者。
