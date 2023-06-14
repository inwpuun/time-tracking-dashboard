import { DetailedBox } from './../../mainPage/DetailedBox'
import { MainBox } from './../../mainPage/MainBox'
import { Attribution } from './../../mainPage/Attribution'
import "./../../../css/App.css"

export function Monthly() {
    return (
        <>
            <div className='body1'>
                <div className="mainBox">
                    <MainBox type="Month" />
                </div>
                <div className="Boxes">
                    <DetailedBox title="Work" type="Month" present={103} previous={128} />
                    <DetailedBox title="Play" type="Month" present={23} previous={29} />
                    <DetailedBox title="Study" type="Month" present={13} previous={19} />
                    <DetailedBox title="Exercise" type="Month" present={11} previous={18} />
                    <DetailedBox title="Social" type="Month" present={21} previous={23} />
                    <DetailedBox title="Self Care" type="Month" present={7} previous={11} />
                </div>
            </div>
            <Attribution />
        </>
    )
}