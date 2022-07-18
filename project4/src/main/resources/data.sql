TRUNCATE car,
users,
mscp;

INSERT INTO car(
    car_id,
    carplate_number,
    end_time,
    location,
    start_time
  )
VALUES (1, 'SJK8831Z', null, '0', '221000'),
  (2, 'SVU4786J', null, '531576', null),
  (3, 'SUI2345L', null, '531576', null),
  (4, 'SGH1289V', null, '531576', null),
  (5, 'SOX2390C', null, '0', '120000'),
  (6, 'SWE7234F', null, '670636', null),
  (7, 'SOI9832F', null, '670636', null),
  (8, 'SCU1936V', null, '160126', null),
  (9, 'SIG1352U', null, '570282', null),
  (10, 'SHX3657R', null, '160126', null);

INSERT INTO users(
    id,
    email,
    first_name,
    last_name,
    password,
    username,
    car_id
  )
VALUES (
    1,
    'puihay.yip@gmail.com',
    'Pui Hay',
    'Yip',
    '123',
    'puihayyip',
    1
  ),
  (
    2,
    'beatriz.donovan@gmail.com',
    'Beatriz',
    'Donovan',
    '123',
    'beatydon',
    null
  ),
  (
    3,
    'zak.andrews@GA.com',
    'Zak',
    'Andrews',
    '123',
    'zakandrews',
    5
  ),
  (
    4,
    'martina.sykes@live.com',
    'Martina',
    'Sykes',
    '123',
    'martinsssy',
    null
  ),
  (
    5,
    'armaan.udley@yahoo.com.sg',
    'Armaan',
    'Dudley',
    '123',
    'armadud',
    null
  );

INSERT INTO mscp(
    id,
    block,
    street,
    postal,
    spostal,
    spot1,
    spot2,
    spot3,
    spot4,
    latitude,
    longtitude
  )
VALUES (
    1,
    '576A',
    'Hougang Ave 4',
    531576,
    '531576',
    'SVU4786J',
    'SUI2345L',
    'SGH1289V',
    null,
    1.3790597547875285,
    103.88602959035836
  ),
  (
    2,
    '636',
    'Senja Road',
    670636,
    '670636',
    null,
    'SOI9832F',
    null,
    'SWE7234F',
    1.3869760856324906,
    103.75834240078169
  ),
  (
    3,
    '126',
    'Kim Tian Road',
    160126,
    '160126',
    'SCU1936V',
    null,
    'SHX3657R',
    null,
    1.282537896113466,
    103.8294972151781
  ),
  (
    4,
    '282',
    'Bishan Street 22',
    570282,
    '570282',
    null,
    'SIG1352U',
    null,
    null,
    1.359043179540605,
    103.8446510020644
  ),
  (
    5,
    '773',
    'Yishun Avenue 3',
    760773,
    '760773',
    null,
    null,
    null,
    null,
    1.4239933520080779,
    103.83277183327
  ),
  (
    6,
    '68',
    'Orchard Road',
    238839,
    '238839',
    null,
    null,
    null,
    null,
    1.301874057964205,
    103.84528225515272
  ),
  (
    7,
    '170',
    'Upper Bukit Timah Road',
    588179,
    '588179',
    null,
    null,
    null,
    null,
    1.3443085606141671,
    103.77574717187827
  ),
  (
    8,
    '155',
    'Simei Road',
    520155,
    '520155',
    null,
    null,
    null,
    null,
    1.3455660414577522,
    103.95839200241817
  ),
  (
    9,
    '650',
    'Punggol Central',
    820650,
    '820650',
    null,
    null,
    null,
    null,
    1.3978391654943176,
    103.91537466501215
  ),
  (
    10,
    '257A',
    'Pasir Ris Street 21',
    511257,
    '511257',
    null,
    null,
    null,
    null,
    1.3689949686648988,
    103.96274217306028
  ),
  (
    11,
    '320',
    'Shunfu Road',
    570320,
    '570320',
    null,
    null,
    null,
    null,
    1.3529200342111503,
    103.83694341228372
  ),
  (
    12,
    '524',
    'Hougang Ave 6',
    530524,
    '530524',
    null,
    null,
    null,
    null,
    1.3751185418978462,
    103.89080541327239
  ),
  (
    13,
    '116',
    'Jurong East Street 13',
    600116,
    '600116',
    null,
    null,
    null,
    null,
    1.3404581856076383,
    103.73459183345581
  ),
  (
    14,
    '986',
    'Jurong West Street 93',
    640986,
    '640986',
    null,
    null,
    null,
    null,
    1.3379068975947601,
    103.69469166542449
  ),
  (
    15,
    '358A',
    'Woodlands Avenue 5',
    731358,
    '731358',
    null,
    null,
    null,
    null,
    1.4340074973187484,
    103.78382517024738
  ),
  (
    16,
    '855',
    'Yishun Ring Road',
    760855,
    '760855',
    null,
    null,
    null,
    null,
    1.4183100374602229,
    103.83650525730681
  ),
  (
    17,
    '323',
    'Sengkang East Way',
    543323,
    '543323',
    null,
    null,
    null,
    null,
    1.394462731453886,
    103.8921101716576
  ),
  (
    18,
    '5A',
    'Holland Close',
    271005,
    '271005',
    null,
    null,
    null,
    null,
    1.3099922894919782,
    103.79580442522591
  ),
  (
    19,
    '1',
    'Cove Avenue',
    098537,
    '098537',
    null,
    null,
    null,
    null,
    1.2477860264982112,
    103.84013374928878
  ),
  (
    20,
    '541A',
    'Bukit Panjang Ring Road',
    671541,
    '671541',
    null,
    null,
    null,
    null,
    1.383184656033701,
    103.7627744133711
  );