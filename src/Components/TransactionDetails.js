import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Address',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        email: 'tiger@gmail.com',
        phone: '9874747488',
        Address: 'Madhapur,Hyderabad',
        date: '2011/04/25'
      },
      {
        name: 'Garrett Winters',
        email: 'garrett@gmail.com',
        phone: '9874767488',
        Address: 'Madhapur,Hyderabad',
        date: '2011/07/25'
      },
      {
        name: 'Ashton Cox',
        email: 'ashton@gmail.com',
        phone: '7476789488',
        Address: 'Madhapur,Hyderabad',
        date: '2009/01/12'
      },
      {
        name: 'Cedric Kelly',
        email: 'cedric@gmail.com',
        phone: '7976765488',
        Address: 'Madhapur,Hyderabad',
        date: '2012/03/29'
      },
      {
        name: 'Airi Satou',
        email: 'satou@gmail.com',
        phone: '7054789488',
        Address: 'Madhapur,Hyderabad',
        date: '2008/11/28'
      },
      {
        name: 'Brielle Williamson',
        email: 'williamson@gmail.com',
        phone: '9076789488',
        Address: 'Madhapur,Hyderabad',
        date: '2012/12/02'
      },
      {
        name: 'Herrod Chandler',
        email: 'herrod@gmail.com',
        phone: '9076789488',
        Address: 'Madhapur,Hyderabad',
        date: '2012/08/06'
      },
      {
        name: 'Rhona Davidson',
        email: 'rhona@gmail.com',
        phone: '7476778488',
        Address: 'Madhapur,Hyderabad',
        date: '2010/10/14'
      },
      {
        name: 'Colleen Hurst',
        email: 'Colleen@gmail.com',
        phone: '7986789488',
        Address: 'Madhapur,Hyderabad',
        date: '2009/09/15'
      },
      {
        name: 'Sonya Frost',
        email: 'Sonya@gmail.com',
        phone: '8530802516',
        Address: 'Madhapur,Hyderabad',
        date: '2008/12/13'
      },
      {
        name: 'Nixon',
        email: 'Nixon@gmail.com',
        phone: '9874747488',
        Address: 'Madhapur,Hyderabad',
        date: '2011/04/25'
      },
      {
        name: 'Winters',
        email: 'Winters@gmail.com',
        phone: '9874767488',
        Address: 'Madhapur,Hyderabad',
        date: '2011/07/25'
      },
      {
        name: 'Cox Ashton',
        email: 'Cox@gmail.com',
        phone: '7476789488',
        Address: 'Madhapur,Hyderabad',
        date: '2009/01/12'
      },
      {
        name: 'Kelly',
        email: 'Kelly@gmail.com',
        phone: '7976765488',
        Address: 'Madhapur,Hyderabad',
        date: '2012/03/29'
      },
      {
        name: 'Airi',
        email: 'Airi@gmail.com',
        phone: '7054789488',
        Address: 'Madhapur,Hyderabad',
        date: '2008/11/28'
      },
      {
        name: 'Brielle',
        email: 'Brielle@gmail.com',
        phone: '9076789488',
        Address: 'Madhapur,Hyderabad',
        date: '2012/12/02'
      },
      {
        name: 'Chandler',
        email: 'Chandler@gmail.com',
        phone: '9076789488',
        Address: 'Madhapur,Hyderabad',
        date: '2012/08/06'
      },
      {
        name: 'Davidson',
        email: 'Davidson@gmail.com',
        phone: '7476778488',
        Address: 'Madhapur,Hyderabad',
        date: '2010/10/14'
      },
      {
        name: 'Hurst',
        email: 'Hurst@gmail.com',
        phone: '7986789488',
        Address: 'Madhapur,Hyderabad',
        date: '2009/09/15'
      },
      {
        name: 'Frost',
        email: 'Frost@gmail.com',
        phone: '8530802516',
        Address: 'Madhapur,Hyderabad',
        date: '2008/12/13'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;