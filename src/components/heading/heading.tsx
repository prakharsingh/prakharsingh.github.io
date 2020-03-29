import React from 'react';
import Box from '@material-ui/core/Box';

export interface HeadingProps {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
}

export default ({
                  leftContent,
                  rightContent,
                }: HeadingProps) => (
  <div style={{width: '100%'}}>
    <Box display="flex">
      <Box flexGrow={1}>
        {leftContent}
      </Box>
      <Box>
        {rightContent}
      </Box>
    </Box>
  </div>
);
