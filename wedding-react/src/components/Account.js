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
                secondAccount={'3333040799660'} secondBank={'카카오뱅크'} secondOwner={'서경민'} role={'신랑'}
                account={'613-01-0729751'} bank={'국민은행'} owner={'서정국'}
            />
            <br/>
            <AccountLine
                secondAccount={'3333017776898'} secondBank={'카카오뱅크'} secondOwner={'이선우'} role={'신부'}
                account={'225818-52-045339'} bank={'농협'} owner={'오유순'}
            />
        </div>
    );
}