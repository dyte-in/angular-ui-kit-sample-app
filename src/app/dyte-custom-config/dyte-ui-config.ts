import { UIConfig } from '@dytesdk/ui-kit';

export const dyteUIConfig: UIConfig = {
  designTokens: {
    spacingBase: 4,
    googleFont: 'Inter'
  },
  styles: {
    'dyte-logo': {
      height: '24px',
      width: '72px',
    },
    'dyte-header': {
      display: 'grid',
      height: 'auto',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '1fr',
      alignItems: 'center'
    },
    'dyte-header.sm': {
      display: 'grid',
      gridArea: 'header',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: '1fr',
      alignItems: 'center',
    },
    'div#header-left': {
      display: 'flex',
      alignItems: 'center',
    },
    'div#header-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    'div#header-right': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    'dyte-stage': {
      display: 'flex',
      flex: '1',
    },
    'dyte-grid': {
      flex: '1',
      height: 'auto',
    },
    'dyte-controlbar': {
      display: 'grid',
      height: '76px',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridTemplateRows: '1fr',
      alignItems: 'center',
      padding: '8px',
    },
    'dyte-controlbar.sm': {
      display: 'flex',
      position: 'relative',
      backgroundColor: 'var(--dyte-colors-background-1000, #000)',
    },
    'div#controlbar-left': {
      display: 'flex',
      alignItems: 'center',
    },
    'div#controlbar-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    'div#controlbar-mobile': {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    'div#controlbar-right': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    'dyte-settings': {
      width: '720px',
      height: '480px',
    },
    'div#more-menu': {
      position: 'absolute',
      boxSizing: 'border-box',
      top: '0',
      left: '0',
      width: '100%',
      transform: 'translateY(-100%)',
      backgroundColor: 'var(--dyte-colors-background-1000, #000)',
      padding: '16px 12px',
      borderRadius: '18px 18px 0 0',
    },
    'div#setupcontrols-media': {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      display: 'flex',
    },
    'div#setupcontrols-settings': {
      position: 'absolute',
      top: '8px',
      right: '8px',
    },
  },
  root: {
    'dyte-meeting': {
      // if using key value pair, provide the key in `state`
      // else provide array of states in `states`
      state: 'meeting',
      states: ['activeSidebar'],
    },
    'dyte-meeting[meeting=idle]': ['dyte-idle-screen'],
    'dyte-meeting[meeting=setup]': ['dyte-setup-screen', 'dyte-dialog-manager'],
    'dyte-meeting[meeting=joined]': [
      'dyte-dialog-manager',
      'dyte-participants-audio',
      'dyte-header',
      // Moved dyte-controlbar above stage.
      'dyte-controlbar',
      'dyte-stage',
    ],
    'dyte-meeting[meeting=joined].activeSidebar.sm': [
      'dyte-header',
      'dyte-stage',
      'dyte-controlbar',
      'dyte-participants-audio',
      'dyte-dialog-manager',
      ['dyte-sidebar', { view: 'full-screen' }],
    ],
    'dyte-meeting[meeting=ended]': ['dyte-ended-screen'],

    'dyte-header': {
      children: ['div#header-left', 'div#header-center', 'div#header-right'],
    },
    'dyte-header.sm': ['div#header-left', 'div#header-right'],

    'div#header-left': ['dyte-logo', 'dyte-recording-indicator'],
    // Moved 3 control items to header center
    'div#header-center': ['dyte-mic-toggle', 'dyte-camera-toggle', 'dyte-settings-toggle'],
    'div#header-right': ['dyte-grid-pagination', 'dyte-clock', 'dyte-participant-count'],

    'dyte-logo': {
      props: {
        logo: '',
        config: {
          designTokens: {
            logo: 'https://app.dyte.io/dyte-logo/dyte.svg',
          },
        },
      },
    },

    'dyte-stage': {
      states: ['activeSidebar'],
      children: ['dyte-grid', 'dyte-notifications'],
    },
    'dyte-stage.activeSidebar': [
      'dyte-grid',
      'dyte-notifications',
      ['dyte-sidebar', { view: 'sidebar' }],
    ],

    // hide sidebar for smaller screens
    'dyte-stage.activeSidebar.sm': ['dyte-grid', 'dyte-notifications'],

    'dyte-participant-tile': {
      state: 'meeting',
    },

    'dyte-participant-tile[meeting=joined]': {
      children: ['dyte-name-tag', 'dyte-avatar'],
    },

    'dyte-participant-tile[meeting=setup]': {
      children: ['dyte-avatar', 'div#setupcontrols-settings', 'div#setupcontrols-media'],
    },
    'div#setupcontrols-media': [
      ['dyte-mic-toggle', { size: 'sm' }],
      ['dyte-camera-toggle', { size: 'sm' }],
    ],
    'div#setupcontrols-settings': [['dyte-settings-toggle', { size: 'sm' }]],
    'dyte-screenshare-view': {
      children: ['dyte-name-tag'],
    },

    'dyte-name-tag': [['dyte-audio-visualizer', { slot: 'start' }]],

    'dyte-controlbar': {
      states: ['activeMoreMenu'],
      props: {
        variant: 'solid',
      },
      children: ['div#controlbar-left', 'div#controlbar-center', 'div#controlbar-right'],
    },

    'dyte-controlbar.sm': ['div#controlbar-mobile'],

    'dyte-controlbar.activeMoreMenu.sm': ['div#controlbar-mobile', 'div#more-menu'],

    'div#controlbar-mobile': [
      'dyte-mic-toggle',
      'dyte-camera-toggle',
      'dyte-leave-button',
      'dyte-more-toggle',
    ],

    'div#more-menu': [
      ['dyte-chat-toggle', { variant: 'vertical' }],
      ['dyte-participants-toggle', { variant: 'vertical' }],
      ['dyte-polls-toggle', { variant: 'vertical' }],
      ['dyte-plugins-toggle', { variant: 'vertical' }],
      ['dyte-fullscreen-toggle', { variant: 'vertical' }],
      ['dyte-screenshare-toggle', { variant: 'vertical' }],
      ['dyte-settings-toggle', { variant: 'vertical' }],
    ],

    'div#controlbar-left': [
      'dyte-leave-button',
      'dyte-screen-share-toggle',
      'dyte-fullscreen-toggle',
      'dyte-recording-toggle',
    ],
    // Moved dyte-meeting-title to controlbar-center.
    'div#controlbar-center': ['dyte-meeting-title'],
    'div#controlbar-right': [
      'dyte-chat-toggle',
      'dyte-polls-toggle',
      'dyte-participants-toggle',
      'dyte-plugins-toggle',
    ],
  },
  config: {
    notifications: ['chat', 'participant_joined', 'participant_left'],
    notification_sounds: ['chat', 'participant_joined'],
    videoFit: 'cover',
  },
};

