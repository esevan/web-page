import React, {useState} from 'react';
import {Dimmer, Divider, Header} from "semantic-ui-react";
import {Clipboard} from "./Clipbaord";

const AccountText = ({account, owner, bank}) => (<p
    style={{
        fontSize: '14px',
        lineHeight: '32px',
        textAlign: 'center',
        whiteSpace: 'pre-line'
    }}>{`${account} ${bank} (예금주: ${owner})`}
    <Clipboard stringToCopy={`${account} ${bank}`}/>
</p>)

const AccountLine = ({account, bank, owner, role, secondBank = '', secondAccount = '', secondOwner = ''}) => {
    const [active, setActive] = useState(true);
    return (
        <Dimmer.Dimmable blurring dimmed={active}>
            <div>
                <AccountText account={account} bank={bank} owner={owner}/>
                {
                    secondBank !== '' &&
                    <AccountText account={secondAccount} bank={secondBank} owner={secondOwner}/>
                }
            </div>
            <Dimmer active={active} onClickOutside={() => setActive(false)}>
                <Header as={'h3'} style={{fontWeight: 600}} inverted>
                    {role}에게 마음 전하기
                </Header>
            </Dimmer>
        </Dimmer.Dimmable>
    );
}

export const Account = () => {
    return (
        <div>
            <Divider horizontal>축하의 마음 전하기</Divider>
            <br/>
            <AccountLine
                account={'3333040799660'} bank={'카카오뱅크'} owner={'서경민'} role={'신랑'}
                secondAccount={'613-01-0729751'} secondBank={'국민은행'} secondOwner={'서정국'}
            />
            <br/>
            <AccountLine
                account={'3333017776898'} bank={'카카오뱅크'} owner={'이선우'} role={'신부'}
                secondAccount={'225818-52-045339'} secondBank={'농협'} secondOwner={'오유순'}
            />
        </div>
    );
}