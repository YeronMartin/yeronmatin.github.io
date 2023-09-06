import React from 'react'
import {MediaAppManagerContextProvider} from './js/MediaApp/mediaAppManager'

import { DMWindow } from './components/AppMedia/DM/DMWindow';


function AppMedia() {
    return (
      <div>
        <MediaAppManagerContextProvider>
          <DMWindow/>
        </MediaAppManagerContextProvider>
      </div>
    );
  }
  
  export default AppMedia;