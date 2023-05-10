import * as React from "react";
const Seo = ({seoData, children }) => {
  let link = "https://static.cdn.prismic.io/prismic.js?new=true&repo="+process.env.GATSBY_PRISMIC_REPO_NAME

  return (
    <>
      <title>{seoData.tab_title +` | SkyPoint`}</title>
      <script async defer src={link}></script>
      <noscript><iframe title="frame" src="//www.googletagmanager.com/ns.html?id=GTM-WCSFZ5" height="0" width="0" style={{display:'none'}}></iframe></noscript>
      <script>{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WCSFZ5');
        `}
      </script>

      <script>{`
        (function (i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-20174112-1', 'auto');
        ga('send', 'pageview');
        `}
      </script>
      <script type="text/javascript" src="https://al-dreamworld.secure-cdn.oc.accessoticketing.com/embed/accesso.js" data-accesso="l=en-au"></script>
      <meta name="description" content={seoData.meta_description} />
      <meta name="keywords" content={seoData.meta_keywords} />
      {seoData.og_title &&
        <meta property="og:title" content={seoData.og_title} />
      }
      {seoData.og_description &&
        <meta property="og:description" content={seoData.og_description} />
      }
      {seoData.og_type &&
        <meta property="og:type" content={seoData.og_type} />  
      }
      {seoData.og_url &&
        <meta property="og:url" content={seoData.og_url} />
      }

      <meta name="google-site-verification" content="tVEOKsPlVKjH8tUdHrg1_2CR4MYIKednmYl6NWFBiCo" />
      <meta name="theme-color" content="#1a5d8d" media="(prefers-color-scheme: dark)"></meta>
      <meta name="theme-color" content="#1a5d8d" media="(prefers-color-scheme: light)"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      {children}
    </>
  );
};

export default Seo;
