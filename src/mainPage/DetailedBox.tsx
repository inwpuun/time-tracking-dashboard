import CSS from 'csstype';

export function DetailedBox( {title, type, previous, present} ) {
    
    function uniqueBackground(title) {
        let background: string = ""
        switch(title) {
            case "Work":
                background = 'hsl(15, 100%, 70%) url(../public/icon-work.svg) no-repeat top right'
                break;
            case "Play":
                background = 'hsl(195, 74%, 62%) url(../public/icon-play.svg) no-repeat top right'
                break;
            case "Study":
                background = 'hsl(348, 100%, 68%) url(../public/icon-study.svg) no-repeat top right'
                break;
            case "Exercise":
                background = 'hsl(145, 58%, 55%) url(../public/icon-exercise.svg) no-repeat top right'
                break;
            case "Social":
                background = 'hsl(264, 64%, 52%) url(../public/icon-social.svg) no-repeat top right'
                break;
            case "Self Care":
                background = 'hsl(43, 84%, 65%) url(../public/icon-self-care.svg) no-repeat top right'
                break;
            default:
                background = 'hsl(15, 100%, 70%) url(../public/icon-work.svg) no-repeat top right'
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
                    <img src="../public/icon-ellipsis.svg" alt="ellipsis" />
                </div>
                <h2>{present}hrs</h2>
                <h3>Last {type} - {previous}hrs</h3>
            </div>
        </div>
    )
}