import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <>
            <div className="sidebarWrap">
                <div className="sidebar_wrapper">
                    <div>
                        <div className="CreateButton_wrapper" aria-expanded="false">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus CreateButton_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>
                        </div>
                    </div>
                    <ul className="Sidebar_list">
                        <li>
                            <a href="/" className="Sidebar_itemBtn Sidebar_active" aria-current="page">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="Sidebar_itemBtn">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="road" class="svg-inline--fa fa-road " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"></path></svg>
                                <span>Lộ Trình</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="Sidebar_itemBtn">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" class="svg-inline--fa fa-lightbulb " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"></path></svg>
                               <span>Học</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="Sidebar_itemBtn">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" class="svg-inline--fa fa-newspaper " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"></path></svg>
                                <span>Blog</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Sidebar
