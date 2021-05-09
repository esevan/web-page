import React from 'react';
import {Header} from "semantic-ui-react";
import {Clipboard} from "./Clipbaord";

export const Account = () => (
    <div>
        <Header as={"h3"} style={{textAlign: 'left', fontWeight: 600, paddingLeft: '4vw'}}>혼주 계좌번호 안내</Header>
        <p
            style={{textAlign: 'left', paddingLeft: '6vw', whiteSpace: 'pre-line'}}>3333040799660 카카오뱅크 (예금주: 서경민)
            <Clipboard stringToCopy={'3333040799660 카카오뱅크'}/>
        </p>
        <p
           style={{textAlign: 'left', paddingLeft: '6vw', whiteSpace: 'pre-line'}}>3333017776898 카카오뱅크 (예금주: 이선우)
            <Clipboard stringToCopy={'3333017776898 카카오뱅크'}/>
        </p>
    </div>
)