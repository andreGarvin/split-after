const test = require('tape')

const splitnth = require('./')

const str = 'Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do you think?'

test('Split after the first period "."', t => {
    t.deepEqual(
        splitnth(str, '.', 1),
        ['Hey there, my name is Andre Garvin',
        ' I, myself of course, created this stupid node package cause why not. What do you think?']
    )
    t.end()
})

test('Split after the second period "."', t => {
    t.ok(
        splitnth(str, '.', 2),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not',
        ' What do you think?']
    )
    t.end()
})

test('Split after the thrid comma ","', t => {
    t.ok(
        splitnth(str, ',', 3),
        ['Hey there, my name is Andre Garvin. I, myself of course',
        ' created this stupid node package cause why not. What do you think?']
    )
    t.end()
})


test('Split after the question mark "?"', t => {
    t.ok(
        splitnth(str, '?', 1),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do you think',
        '']
    )
    t.end()
})


test('Split after the 11th space " "', t => {

    const output = splitnth(str, ' ', 11)

    t.ok(output.length === 2)
    t.ok(output[0].slice(-1) === ',')
    t.ok(output[1].slice(0, 7) === 'created')
    t.deepEqual(
        output,
        ['Hey there, my name is Andre Garvin. I, myself of course,',
        'created this stupid node package cause why not. What do you think?']
    )
    t.end()
})

test('Test if no seperator was found, should return the string in a array', t => {
    t.deepEqual(
        splitnth(str, 'APPLES', 11),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do you think?']
    )
    t.end()
})

test('Test if no seperator was found, should return the string in a array', t => {
    t.deepEqual(
        splitnth(str, ' ', -2),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do',
        'you think?']
    )
    t.end()
})