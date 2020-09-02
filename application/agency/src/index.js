import React from 'react';
import Notes from 'notes-rd/core';

const Application = ({ title = 'empty prop' }) => (
    <div>
        <h1>{title}</h1>
        <Notes>Package Button</Notes>
    </div>
)

export default Application;