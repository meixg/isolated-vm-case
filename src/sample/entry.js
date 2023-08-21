const {marked} = require('marked');
const hljs = require('highlight.js');
const highlight = require('./highlight');

function markdownRender(text) {
    marked.use({
        highlight: (code, lang) => highlight(hljs, code, lang)
    });
    return marked.parse(text);
}

const md = "对于多个字段值进行排序，可以使用Java中的Stream流来实现。以下是一个示例代码：\n\n```java\nimport java.util.ArrayList;\nimport java.util.Comparator;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class Main {\n\n    public static void main(String[] args) {\n        // 创建一个包含多个字段的类\n        class Person {\n            private String name;\n            private int age;\n            // 其他字段...\n\n            public Person(String name, int age) {\n                this.name = name;\n                this.age = age;\n            }\n\n            // getter 和 setter 方法...\n        }\n\n        // 创建一个包含多个Person对象的List\n        List<Person> personList = new ArrayList<>();\n        personList.add(new Person(\"Tom\", 20));\n        personList.add(new Person(\"Alice\", 25));\n        personList.add(new Person(\"Bob\", 30));\n\n        // 使用Stream流对List中的Person对象按照多个字段进行排序\n        List<Person> sortedList = personList.stream()\n                .sorted(Comparator.comparingInt(Person::getAge) // 先按照age字段进行升序排序\n                        .thenComparing(Person::getName)) // 如果age相同，再按照name字段进行升序排序\n                .collect(Collectors.toList());\n\n        // 输出排序后的结果\n        for (Person person : sortedList) {\n            System.out.println(person.getName() + \" - \" + person.getAge());\n        }\n    }\n}\n```\n\n以上代码中，我们通过Stream流对包含多个字段的Person对象进行排序。首先按照age字段进行升序排序，如果age字段相同则按照name字段进行升序排序。最后通过collect方法将排序后的结果存储到一个新的List中，并输出排序后的结果。\n\n输出结果：\n```\nTom - 20\nAlice - 25\nBob - 30\n```\n";
markdownRender(md);