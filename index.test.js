const { test } = require('ava')

const splitnth = require('./')

const str = 'Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do you think?'

test('Split after the first period "."', t => {
    t.deepEqual(
        splitnth(str, '.', 1),
        ['Hey there, my name is Andre Garvin',
        ' I, myself of course, created this stupid node package cause why not. What do you think?']
    )
})

test('Split after the second period "."', t => {
    t.truthy(
        splitnth(str, '.', 2),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not',
        ' What do you think?']
    )
})

test('Split after the thrid comma ","', t => {
    t.truthy(
        splitnth(str, ',', 3),
        ['Hey there, my name is Andre Garvin. I, myself of course',
        ' created this stupid node package cause why not. What do you think?']
    )
})


test('Split after the question mark "?"', t => {
    t.truthy(
        splitnth(str, '?', 1),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do you think',
        '']
    )
})


test('Split after the 11th space " "', t => {
    t.plan(4)

    const output = splitnth(str, ' ', 11)

    t.truthy(output.length === 2)
    t.truthy(output[0].slice(-1) === ',')
    t.truthy(output[1].slice(0, 7) === 'created')
    t.deepEqual(
        output,
        ['Hey there, my name is Andre Garvin. I, myself of course,',
        'created this stupid node package cause why not. What do you think?']
    )
})

test('Test if no seperator was found, should return the string in a array', t => {
    t.deepEqual(
        splitnth(str, 'APPLES', 11),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do you think?']
    )
})

test('Test if no seperator was found, should return the string in a array', t => {
    t.deepEqual(
        splitnth(str, ' ', -2),
        ['Hey there, my name is Andre Garvin. I, myself of course, created this stupid node package cause why not. What do',
        'you think?']
    )
})