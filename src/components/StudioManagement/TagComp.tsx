import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Space, Input, Tag, Tooltip, theme } from 'antd';

const TagComp: React.FC = () => {
    const { token } = theme.useToken();
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);

    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags, '-------close----------');
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        console.log([...tags, inputValue], '---------create------------');

        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        console.log("edit===============");

        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        console.log(newTags, '------newTags-----');

        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };

    const tagInputStyle: React.CSSProperties = {
        width: 78,
        verticalAlign: 'top',
    };

    const tagPlusStyle: React.CSSProperties = {
        background: token.colorBgContainer,
        borderStyle: 'dashed',
        fontSize: "1rem",
        fontFamily: "poppins",
        height: '1.8rem',
        padding: "4% 2%"
    };

    return (
        <Space size={[0, 8]} wrap >
            <Space size={[0, 8]} wrap>
                {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                ref={editInputRef}
                                key={tag}
                                size="large"
                                style={tagInputStyle}
                                value={editInputValue}
                                onChange={handleEditInputChange}
                                onBlur={handleEditInputConfirm}
                                onPressEnter={handleEditInputConfirm}
                            />
                        );
                    }
                    const isLongTag: any = tag.length > 20;
                    const tagElem = (
                        <Tag
                            key={tag}
                            closable={true}
                            style={{ userSelect: 'none', fontSize: "1rem", height: '1.8rem', padding: "5% 2%" }}
                            onClose={() => handleClose(tag)}
                        >
                            <span
                                style={{ fontSize: "1rem", fontFamily: "poppins" }}
                                onDoubleClick={(e) => {
                                    setEditInputIndex(index);
                                    setEditInputValue(tag);
                                    e.preventDefault();
                                }}
                            >
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                <i className="fa-light fa-xmark" style={{ marginLeft: "2px" }}></i>
                            </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                })}
            </Space>
            {
                inputVisible ? (
                    <Input
                        ref={inputRef}
                        type="text"
                        size="large"
                        style={tagInputStyle}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />
                ) : (
                    <Tag style={tagPlusStyle} onClick={showInput} >
                        <PlusOutlined style={{ marginTop: "0px" }} /> New Tag
                    </Tag>
                )
            }
        </Space >
    );
};

export default TagComp;