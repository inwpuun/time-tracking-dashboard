import CSS from 'csstype';
import ellipsis from "./../assets/icon-ellipsis.svg"

export function DetailedBox( {title, type, previous, present}: {title: string, type: string, previous: number, present: number} ) {
    
    function uniqueBackground(title: string) {
        let background: string = ""
        switch(title) {
            case "Work":
                background = 'hsl(15, 100%, 70%) url(/icon-work.svg) no-repeat top right'
                break;
            case "Play":
                background = 'hsl(195, 74%, 62%) url(/icon-play.svg) no-repeat top right'
                break;
            case "Study":
                background = 'hsl(348, 100%, 68%) url(/icon-study.svg) no-repeat top right'
                break;
            case "Exercise":
                background = 'hsl(145, 58%, 55%) url(/icon-exercise.svg) no-repeat top right'
                break;
            case "Social":
                background = 'hsl(264, 64%, 52%) url(/icon-social.svg) no-repeat top right'
                break;
            case "Self Care":
                background = 'hsl(43, 84%, 65%) url(/icon-self-care.svg) no-repeat top right'
                break;
            default:
                background = 'hsl(15, 100%, 70%) url(/icon-work.svg) no-repeat top right'
        }
        return background
    }


    const style: CSS.Properties = {
        background: uniqueBackground(title),
    }

    return (
        <div className="Box" style={style}>
            <div className="inside">
                <div className="topLine">
                    <h1>{title}</h1>
                    <img src={ellipsis} alt="ellipsis" />
                </div>
                <h2>{present}hrs</h2>
                <h3>Last {type} - {previous}hrs</h3>
            </div>
        </div>
    )
}