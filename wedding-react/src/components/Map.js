import React, {useEffect} from 'react';
import {Header} from "semantic-ui-react";
import {BsClipboard} from "react-icons/all";
import ClipboardJS from "clipboard";

const address = {
    title: '포천시민교회',
    detail: '경기도 포천시 원모루로 2길 17',
    lat: 37.8924755,
    lang: 127.1933305,
    naverMapLink: 'http://naver.me/xWNkjelP'
}

const infoWindowContent = `
<div class="iw_inner">
<p style="padding: 0 1vw; font-size: 13px;">${address.title}</p>
</div>
`;

export const Map = () => {

    useEffect(() => {
        new ClipboardJS('.btn');

        const navermaps = window.naver.maps;
        const centerLatLng = new navermaps.LatLng(address.lat, address.lang);
        const map = new navermaps.Map(document.getElementById('naver-map'), {center: centerLatLng});

        const marker = new navermaps.Marker({
            position: centerLatLng,
            map: map
        });

        const infowindow = new navermaps.InfoWindow({
            content: infoWindowContent,
            borderWidth: 1,
            borderColor: "#444"
        })

        infowindow.open(map, marker);
    });

    return (
        <>
            <Header as={"h3"} style={{textAlign: 'left', fontWeight: 600, paddingLeft: '4vw'}}>찾아 오시는 길</Header>
            <p id='address-elem' style={{
                textAlign: 'left',
                fontWeight: 600,
                paddingLeft: '6vw',
                whiteSpace: 'pre-line'
            }}>{address.title}</p>
            <p id='address-elem'
               style={{textAlign: 'left', paddingLeft: '6vw', whiteSpace: 'pre-line'}}>{address.detail}
                <button style={{border: 'transparent', backgroundColor: 'transparent'}} className={'btn'} onClick={() => alert("Copied")}
                        data-clipboard-text={address.detail}>복사하기 <BsClipboard/></button>
            </p>
            <div id={'naver-map'} style={{height: '35vh'}}/>
            <div style={{
                width: '100vw',
                height: '6vh',
                backgroundColor: '#04cf5c',
            }}>
                <a
                    style={{
                        color: 'white',
                        lineHeight: '6vh',
                        fontWeight: 600,
                        textDecoration: 'none'
                    }}
                    href={address.naverMapLink}
                    target={"_blank"}
                >네이버 지도에서 보기</a>
            </div>
        </>
    );
}