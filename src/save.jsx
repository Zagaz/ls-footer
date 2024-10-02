import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<>
		<div  { ...useBlockProps.save() }>

		<footer className="ud-footer wow fadeInUp mt-5" data-aos-delay=".15s">
    <div className="shape shape-1">
        <img src="https://libresign.coop/assets/images/footer/shape-1.svg" alt="shape" />
    </div>

    <div className="shape shape-2">
        <img src="https://libresign.coop/assets/images/footer/shape-2.svg" alt="shape" />
    </div>

    <div className="shape shape-3">
        <img src="https://libresign.coop/assets/images/footer/shape-3.svg" alt="shape" />
    </div>

    <div className="ud-footer-widgets">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="ud-widget">
                        <a href="/#home" className="ud-footer-logo">
                            <img src="https://libresign.coop/assets/images/logo/logo.svg" alt="logo" />
                        </a>
                        <p className="ud-widget-desc">
                            We create digital experiences for brands and companies by using technology.
                        </p>
                        <ul className="ud-widget-socials">
                            <li>
                                <a target="_blank" href="https://github.com/LibreSign/libresign" title="LibreSign GitHub repository">
                                    <i className="lni lni-github-original"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/libresign/" title="LibreSign LinkedIn page">
                                    <i className="lni lni-linkedin-original"></i>
                                </a>
                            </li>
                            <li>
                              <a target="_blank" href="https://t.me/LibreSign" title="LibreSign Telegram group">
                                  <i className="lni lni-telegram-original"></i>
                              </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://www.instagram.com/libresign/" title="LibreSign Instagram profile">
                                <i className="lni lni-instagram-original"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="ud-widget col-lg-5">
                        <a target="_blank" href="https://www.somos.coop.br/" title="Page to national movement that valozie cooperative initiatives.">
                            <img src="https://libresign.coop/assets/images/icon/somoscoop.png" alt="icon_somos_coop" />
                        </a>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                    <div className="ud-widget">
                        <h5 className="ud-widget-title">About Us</h5>
                        <ul className="ud-widget-links">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/#features">Features</a>
                            </li>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                    <div className="ud-widget">
                        <h5 className="ud-widget-title">Features</h5>
                        <ul className="ud-widget-links">
                                                          <li>
                                <a href="/posts/advanced-security">Advanced security</a>
                              </li>
                                                          <li>
                                <a href="/posts/hybrid-signatures">Hybrid signatures</a>
                              </li>
                                                          <li>
                                <a href="/posts/document-validation-by-qr-code">Document validation by QR Code</a>
                              </li>
                                                          <li>
                                <a href="/posts/real-time-monitoring">Real-time monitoring</a>
                              </li>
                                                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ud-footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <ul className="ud-footer-bottom-left">
                        <li>
                            <a href="/privacy-policy">Privacy policy</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p className="ud-footer-bottom-right">
                        Developed by <a href="https://librecode.coop" rel="nofollow">LibreCode</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ====== Back To Top Start ====== --> */}
    <a id="back-to-top" className="back-to-top" style="display: flex;">
        <i className="lni lni-chevron-up"> </i>
    </a>
    {/* <!-- ====== Back To Top End ====== --> */}
    {/* <script>
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()),
        'event': 'mtm.Start'});
        (function() {
            var d=document, g=d.createElement('script'),
            s=d.getElementsByTagName('script')[0];
            g.async=true;
            g.src='https://matomo.librecode.coop/js/container_8jNjdh8C.js';
            s.parentNode.insertBefore(g,s);
        })();
    </script> */}

    {/* <!-- ====== All Javascript Files ====== --> */}
    {/* <script defer="" src="/assets/build/js/main.js?id=1c0fc5409f0671dfd92fd5921b3c0bb6"></script> */}
    {/* <script>
        document.getElementById('back-to-top').onclick = function(e) {
            e.preventDefault()
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        };

        // ==== for menu scroll
        const pageLink = document.querySelectorAll(".ud-menu-scroll");

        pageLink.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                var url = elem.getAttribute("href")
                var anchor = url.match(/(#.*)$/)
                if (window.location.pathname !== '/' || anchor === null) {
                    return
                }
                anchor = anchor[1]
                e.preventDefault();
                document.querySelector(anchor).scrollIntoView({
                    behavior: "smooth",
                    offsetTop: 1 - 60,
                });
            });
        });

        // section menu active
        function onScroll(event) {
            const sections = document.querySelectorAll(".ud-menu-scroll");
            const scrollPos =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

            for (let i = 0; i < sections.length; i++) {
                const currLink = sections[i];
                const url = currLink.getAttribute("href");
                var anchor = url.match(/(#.*)$/)
                if (anchor === null) {
                    continue
                }
                anchor = anchor[1]
                const refElement = document.querySelector(anchor);
                const scrollTopMinus = scrollPos + 73;
                if (
                    refElement.offsetTop <= scrollTopMinus &&
                    refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                ) {
                    document
                    .querySelector(".ud-menu-scroll")
                    .classNameList.remove("active");
                    currLink.classNameList.add("active");
                } else {
                    currLink.classNameList.remove("active");
                }
            }
        }

        window.document.addEventListener("scroll", onScroll);
    </script> */}


</footer>

		</div>

		</>
	);
}
