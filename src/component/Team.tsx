import { TeamImageProps, TeamIntroProps, TeamTitleProps } from "../interface/TeamProps"
import { BaseImgPath } from "../data/BaseImgPath"

export default function Team() {
    const team_title = "關於團隊"
    const team_intro = ["TKUIMWD - TKUIM Wash Dishes", "中文名為「淡江資管畢業刷碗」", "碰啥鍵盤，刷碗盤比較實際", "---- ZZY 可能沒有說過"]
    const team_intro_font = ["x-large-text", "x-large-text", "x-large-text", "large-gray-text"]
    const img_src = `${BaseImgPath}wd.jpg`

    return (
        <div className="Container Cyan-Shadow">
            <div className="flex flex-col">
                <div className="TeamContainer">
                    <div className="TeamIntroContainer">
                        <TeamTitle title={team_title}></TeamTitle>
                        <TeamIntro intro={team_intro} font={team_intro_font}></TeamIntro>
                    </div>
                    <TeamImage src={img_src}></TeamImage>
                </div>
            </div>
        </div>
    )
}

function TeamTitle(team_title: TeamTitleProps) {
    return (
        <div>
            <h2 className="title-text">{team_title.title}</h2>
        </div>
    )
}

function TeamIntro(team_intro: TeamIntroProps) {
    return (
        <div>
            {
                team_intro.intro.map((intro, index) => (
                    <p key={index} className={team_intro.font[index]}>{intro}</p>
                ))
            }
        </div>
    )
}

function TeamImage(team_image: TeamImageProps) {
    return (
        <div>
            <img className="Container.Image" src={team_image.src} alt="" />
        </div>
    )
}
