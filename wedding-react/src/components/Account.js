import React from 'react';
import {Divider} from "semantic-ui-react";
import {Clipboard} from "./Clipbaord";

export const Account = () => (
    <div>
        <Divider horizontal>축하의 마음 전하기</Divider>
        <br/>
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