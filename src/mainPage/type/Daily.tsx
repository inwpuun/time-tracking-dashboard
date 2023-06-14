import { DetailedBox } from './../../mainPage/DetailedBox'
import { MainBox } from './../../mainPage/MainBox'
import { Attribution } from './../../mainPage/Attribution'
import "./../../../css/App.css"

export function Daily() {
    return (
        <>
            <body>
                <div className="mainBox">
                    <MainBox type="Day" />
                </div>
                <div className="Boxes">
                    <DetailedBox title="Work" type="Day" present={5} previous={7} />
                    <DetailedBox title="Play" type="Day" present={1} previous={2} />
                    <DetailedBox title="Study" type="Day" present={0} previous={1} />
                    <DetailedBox title="Exercise" type="Day" present={1} previous={1} />
                    <DetailedBox title="Social" type="Day" present={1} previous={3} />
                    <DetailedBox title="Self Care" type="Day" present={0} previous={1} />
                </div>
            </body>
            <Attribution />
        </>
    )
}