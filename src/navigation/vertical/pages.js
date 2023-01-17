export default [{
    header: 'management',
    permission: 'public'
},
    {
        title: ' التقرير',
        icon: 'CommandIcon',
        permission: 'public',
        route: 'dashboard',

    },
    {
        title: ' العقارات',
        icon: 'HomeIcon',
        permission: 'public',
        route: 'Realtys',

    },
    {
        header: 'الاعدادات',
        permission: 'public'
    },

    {
        title: 'المستخدمين',
        icon: 'UserPlusIcon',
        permission: 'public',
        route: 'users',
    },
    {
        title: 'الادوار',
        icon: 'KeyIcon',
        // permission: 'public',
        route: 'roles',
    }
];
