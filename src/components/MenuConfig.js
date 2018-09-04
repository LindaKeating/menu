const icons = require('./Icons');
const colour = require('./colours.js');

exports.menuConfig = [
        {
            name: 'first item on list',
            colour: colour.colours.blue,
            icon: icons.icons.teachers,
            isSelected: true,
            action: () => { console.debug('Root Item One was pressed')},
            children: [
              {
                  name: 'sub item one',
                  action: () => { console.debug('sub item one was pressed')}
              },
              {
                  name: 'sub item two',
                  action: () => { console.debug('sub item two was pressed')}
              },
              {
                  name: 'sub item three',
                  action: () => { console.debug('sub item three was pressed')}
              },
              {
                  name: 'sub item four',
                  action: () => { console.debug('sub item four was pressed')}
              },
              {
                  name: 'sub item one',
                  action: () => { console.debug('sub item one was pressed')}
              }
            ]
        },
        {
          name: 'second item on list',
          colour: colour.colours.pink,
          icon: icons.icons.students,
          isSelected: false,
          action: () => { console.debug('Root Item One was pressed')},
          children: [
            {
                name: 'sub item one',
                action: () => { console.debug('sub item one was pressed')}
            },
            {
                name: 'sub item two',
                action: () => { console.debug('sub item two was pressed')}
            },
            {
                name: 'sub item three',
                action: () => { console.debug('sub item three was pressed')}
            },
            {
                name: 'sub item four',
                action: () => { console.debug('sub item four was pressed')}
            },
            {
                name: 'sub item one',
                action: () => { console.debug('sub item one was pressed')}
            }
          ]
        },
        {
          name: 'first item on list',
          colour: colour.colours.salmon,
          icon: icons.icons.building,
          isSelected: false,
          action: () => { console.debug('Root Item One was pressed')},
          children: [
            {
                name: 'sub item one',
                action: () => { console.debug('sub item one was pressed')}
            },
            {
                name: 'sub item two',
                action: () => { console.debug('sub item two was pressed')}
            },
            {
                name: 'sub item three',
                action: () => { console.debug('sub item three was pressed')}
            },
            {
                name: 'sub item four',
                action: () => { console.debug('sub item four was pressed')}
            },
            {
                name: 'sub item one',
                action: () => { console.debug('sub item one was pressed')}
            }
          ]
        },
        {
          name: 'first item on list',
          colour: colour.colours.yellow,
          icon: icons.icons.building,
          isSelected: false,
          action: () => { console.debug('Root Item One was pressed')},
          children: [
            {
                name: 'sub item one',
                action: () => { console.debug('sub item one was pressed')}
            },
            {
                name: 'sub item two',
                action: () => { console.debug('sub item two was pressed')}
            },
            {
                name: 'sub item three',
                action: () => { console.debug('sub item three was pressed')}
            },
            {
                name: 'sub item four',
                action: () => { console.debug('sub item four was pressed')}
            },
            {
                name: 'sub item one',
                action: () => { console.debug('sub item one was pressed')}
            }
          ]
      }
];