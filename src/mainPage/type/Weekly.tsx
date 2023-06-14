import { DetailedBox } from './../../mainPage/DetailedBox'
import { MainBox } from './../../mainPage/MainBox'
import { Attribution } from './../../mainPage/Attribution'
import "./../../../css/App.css"

export function Weekly() {
    return (
        <>
            <body>
                <div className="mainBox">
                    <MainBox type="Week" />
                </div>
                <div className="Boxes">
                    <DetailedBox title="Work" type="Week" present={32} previous={36} />
                    <DetailedBox title="Play" type="Week" present={10} previous={8} />
                    <DetailedBox title="Study" type="Week" present={4} previous={7} />
                    <DetailedBox title="Exercise" type="Week" present={4} previous={5} />
                    <DetailedBox title="Social" type="Week" present={5} previous={10} />
                    <DetailedBox title="Self Care" type="Week" present={2} previous={2} />
                </div>
            </body>
            <Attribution />
        </>
    )
}