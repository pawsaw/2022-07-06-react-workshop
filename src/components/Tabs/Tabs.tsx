import React, { CSSProperties, useState } from 'react';

export interface TabProps {
    label: string;
    children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = () => null;

export interface TabsProps {
    children: React.ReactElement<TabProps>[]
}

export const Tabs: React.FC<TabsProps> = ({
    children: tabs
}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const onTabSelected = (index: number) => {
        setActiveIndex(index);
    };

    return <div style={styles.container}>
        <div style={styles.labels}>
            {
                tabs.map((tab, i) => (
                    <button key={i} onClick={() => onTabSelected(i)} style={{...styles.label, ...(activeIndex === i ? styles.labelActive : {})}}>{tab.props.label}</button>
                ))
            }
        </div>
        <div style={styles.contentArea}>
        {
                tabs.map((tab, i) => (
                    <div key={i} style={{...styles.content, ...(activeIndex === i ? styles.contentActive : {})}}>
                        {tab.props.children}
                    </div>

                ))
            }
        </div>


    </div>
};

const styles: Record<string, CSSProperties> = {
    container: {
        boxSizing: 'border-box',
        width: 500,
        height: 500,
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
    },

    labels: {
        width: '100%',
        border: '1px solid blue',
        display: 'flex',
        gap: 20,
        cursor: 'pointer'
    },

    label: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
        height: 30,
        backgroundColor: 'blue',
        color: 'white'
    },

    labelActive: {
        color: 'blue',
        background: 'white'
    },

    contentArea: {
        flex: 1,
    },

    content: {
        display: 'none'
    },

    contentActive: {
        display: 'block'
    }


};



