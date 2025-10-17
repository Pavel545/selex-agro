import "./css/style.css";



export default function MobMenu(params) {


    return (
        <>
        <div className="MobMenu flex--sb">
            <a href="/" className="MobMenu-item">
                <div className="MobMenu-item_iconBox">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.94444 12H1.5L12.5 1L23.5 12H21.0556M3.94444 12V20.5556C3.94444 21.2039 4.20198 21.8256 4.66041 22.284C5.11883 22.7425 5.74058 23 6.38889 23H18.6111C19.2594 23 19.8812 22.7425 20.3396 22.284C20.798 21.8256 21.0556 21.2039 21.0556 20.5556V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.83325 23V15.6667C8.83325 15.0184 9.09079 14.3966 9.54921 13.9382C10.0076 13.4798 10.6294 13.2222 11.2777 13.2222H13.7221C14.3704 13.2222 14.9922 13.4798 15.4506 13.9382C15.909 14.3966 16.1666 15.0184 16.1666 15.6667V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <p className="MobMenu-item_title">
                    Главная
                </p>
            </a>

            <a href="/company" className="MobMenu-item">
                <div className="MobMenu-item_iconBox">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11 0C4.92489 0 0 4.92483 0 11C0 17.0751 4.92489 22 11 22C17.0752 22 22 17.0751 22 11C22 4.92483 17.0752 0 11 0ZM11 19.8C6.14769 19.8 2.20002 15.8523 2.20002 11C2.20002 6.14764 6.14764 2.20002 11 2.20002C15.8524 2.20002 19.8 6.14764 19.8 11C19.8 15.8523 15.8524 19.8 11 19.8ZM12.3774 6.59999C12.3774 7.39756 11.7967 7.97501 11.0112 7.97501C10.1938 7.97501 9.62738 7.39751 9.62738 6.58473C9.62738 5.80356 10.2092 5.22503 11.0112 5.22503C11.7967 5.22503 12.3774 5.80356 12.3774 6.59999ZM9.90242 9.89999H12.1024V16.5H9.90242V9.89999Z" fill="white" />
                    </svg>
                </div>

                <p className="MobMenu-item_title">
                    о компании
                </p>
            </a>

            <a href="/our_products" className="MobMenu-item">
                <div className="MobMenu-item_iconBox">
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5686 4.5834L20.9163 15.1947H6.86157L4.20923 4.5834H23.5686Z" stroke="white" strokeWidth="0.5" />
                        <path d="M1.11108 1H3.05553L3.88886 4.33333M3.88886 4.33333L6.66664 15.4444H21.1111L23.8889 4.33333H3.88886Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.66715 21C7.58763 21 8.33382 20.2538 8.33382 19.3334C8.33382 18.4129 7.58763 17.6667 6.66715 17.6667C5.74668 17.6667 5.00049 18.4129 5.00049 19.3334C5.00049 20.2538 5.74668 21 6.66715 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.1105 21C22.031 21 22.7772 20.2538 22.7772 19.3334C22.7772 18.4129 22.031 17.6667 21.1105 17.6667C20.19 17.6667 19.4438 18.4129 19.4438 19.3334C19.4438 20.2538 20.19 21 21.1105 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <p className="MobMenu-item_title">
                    Товары
                </p>
            </a>

            <a href="/services" className="MobMenu-item">
                <div className="MobMenu-item_iconBox">
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0001 2L1.57153 7.2381M11.0001 2L20.4287 7.2381M11.0001 2L6.28582 4.61905L11.0001 7.2381L15.7144 4.61905L11.0001 2ZM1.57153 7.2381V18.7619M1.57153 7.2381L11.0001 12.4762M1.57153 18.7619L11.0001 24M1.57153 18.7619V13L6.28582 15.619V21.381L1.57153 18.7619ZM11.0001 24L20.4287 18.7619M11.0001 24V12.4762M20.4287 18.7619V7.2381M20.4287 18.7619V13L15.7144 15.619V21.381L20.4287 18.7619ZM20.4287 7.2381L11.0001 12.4762" stroke="white" strokeWidth="2" />
                    </svg>
                </div>

                <p className="MobMenu-item_title">
                    Услуги
                </p>
            </a>

            {/* <a href="/stati" className="MobMenu-item">
                <div className="MobMenu-item_iconBox">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.88889 17.1111H13.4444V14.6667H4.88889V17.1111ZM4.88889 12.2222H17.1111V9.77778H4.88889V12.2222ZM4.88889 7.33333H17.1111V4.88889H4.88889V7.33333ZM0 22V0H22V22H0Z" fill="white" />
                    </svg>
                </div>

                <p className="MobMenu-item_title">
                    Статьи
                </p>
            </a> */}
        </div>
        <div className="MobMenu-padd">

        </div>
        </>
    )
}