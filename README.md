# The Illiase Platform (building)
Illiase project is under development.

### Preview
[🔗illiase.vercel.app](https://illiase.vercel.app/)

<!------- ROADMAP TABLE ------->
## Dev Roadmap
| Version | Description | Ref | Stat |
| :-----: | :---------: | :--: | :--: |
| 0.1.x | Login: Authentication | - | `done` |
| 0.2.x | Members posting; Surface & Works page | [X](https://x.com), [Funamusea](http://funamusea.com) | `progressing` |
| 0.3.x | Detail Pages of Works & Blogs | [pixiv](https://www.pixiv.net/en/artworks/111778168), [blogger](https://thisoecode.blogspot.com/2024/02/blogger-example.html) | `planned` |
| 0.4.x | Non-members users' commenting functionality | [YouTube](https://youtu.be/dQw4w9WgXcQ) | `planned` |
| 0.5.x | Members' personal page | [pixiv](https://www.pixiv.net/users/1039353) | `planned` |
| 0.6.x | Account settings page | [GitHub](https://github.com/settings) | `planned` |
| 0.7.x | Public Private Policy & Terms of Service | [Termly](https://termly.io/resources/guides/how-to-write-a-privacy-policy/) | `planned` |
| 0.8.x | Contact Page | - | `planned` |
| 0.9.x | Change languages (`en`, `zh`, `ja`, `ko`) | - | `planned` |
| 1.0.x | LAUNCH TEST | - | `goal` |
| 1.1.x | LAUNCH | - | `goal` |
| 1.?.x | Customized Members' page | - | `idea` |
| 1.?.x | Linking metadata (title & thumbnail) for Discord, X... | - | `idea` |
| ?.?.? | ... | - | `coming-soon` |


<!------- DOCS ------->
# Temp Documentation

> Documentation version: 0.2.1

The Illiase Project, a fantasy project created by five high school grademates back in 2018, is a fiction and artwork-creating group. Up until Feb 2024, there are 5 members in the Illiase Project group.

The Illiase Platform web application (this repository) is the official platform of the Illiase Project.


## Authentications

### Illiase Account
- There are 2 kinds of accounts: Member & Visitor.
- [^1] Members can post [Posts](#1-works-and-posts).
- [^1] Visitors can write comments on [Posts](#1-works-and-posts).
- The only way to join as a Member is to contact us.
- User ID is the email address provided by authentication providers (Google and GitHub).
- Member accounts have another unique identifier: Illiase ID.

### Logging In
- Users can login with Google and GitHub.
> Good to know: If your Google account email address is the same one as GitHub, you will end up logging in to the same Illiase account whichever authentication provider you choose to login with.


## [^1] Works and Posts

### 1. Works
Artwork releases.
- **Content type:** Illustrations, Maps, Modelings, Original Charactors, Live2Ds...
- **Will be shown on:**
`Surface` Page
`Our Works` Page
- **Structure:**
1.`img-content` or [^2]`vid-content` (main content)
2.`tags`
3.`title` (optional)
4.`text-content` (optional)
- Note for developer:
Ref: [pixiv](https://www.pixiv.net/en/artworks/111778168)

### 2. Articles
Fiction releases.
- **Content type:**
, original charactor introduction documentations, stories, fictions... 
- **Will be shown on:**
`Our Works` Page
- **Structure:**
1.`title`
2.[^4]`md-content` (main content)
3.`tags`

### 3. Shorts
Blogs and other posts.
- **Content type:**
Illiase News, WIP reports, “Tweets”, Sh1t posts, Memes...
- **Will be shown on:**
`Surface` Page
- **Structure:**
1.`title` (optional)
2.`text-content` (main content)
3.`img-content` or [^2]`vid-content` or [^3]`embeds`



# Contact us
If you are willing to build this project with us, please email us at thisoe@naver.com !



<!------- FOOTNOTES ------->
[^1]: These functionalities are yet not done coding.
[^2]: We are not considering support of Video contents in the near future.
[^3]: `embeds` are links from outer platforms, e.g. YouTube videos or X posts.
[^4]: `md-content` is Markdown styled articles.
