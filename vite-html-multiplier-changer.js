import fs from "fs";
export default function includeHtml() {
    return {
        name: "vite-html-multiplier-changer",
        async transformIndexHtml(html) {
            const includeTagRegex = /<(\D+)\ssrcpars=".*\1\.html"[\s\S]*?\/>/g;
            const replacedHtml = await Promise.all(
                Array.from(
                    html.matchAll(includeTagRegex),
                    async ([match, srcpars]) => {
                        try {
                            srcpars = match.match(/\bsrcpars="([^"]+)"/)[1];
                            const content = await fs.promises.readFile(
                                srcpars,
                                "utf-8"
                            );
                            return { match, content };
                        } catch (error) {
                            console.error(
                                `Error reading ${srcpars},: ${error}`
                            );
                            return { match, content: match };
                        }
                    }
                )
            );
            return replacedHtml.reduce((acc, { match, content }) => {
                const propsUniversal = [
                    ...match.matchAll(/(data-\w+-\w+)="([^"]+)"/g),
                ];

                propsUniversal.map((_, index, array) => {
                    switch (true) {
                        case array[index][1].includes("text"):
                            var regText = new RegExp(
                                `(${array[index][1]})="([^"]+)">([^<]+)`,
                                "gm"
                            );
                            content = content.replace(
                                regText,
                                `>${array[index][2]}`
                            );
                            break;

                        case array[index][1].includes("attribute"):
                            var regAttribute = new RegExp(
                                `(${array[index][1]})(=")([^"]+)("\\s?)(\\3)(=")([^"]+)`,
                                "gm"
                            );
                            content = content.replace(
                                regAttribute,
                                `$5="${array[index][2]}`
                            );
                            break;

                        case array[index][1].includes("mark"):
                            var regMark = new RegExp(
                                `{{(${array[index][1]}):([^}}]+)}}`,
                                "gm"
                            );
                            content = content.replace(
                                regMark,
                                `${array[index][2]}`
                            );
                            content = content.replace(
                                /(data-\w+-\w+)="([^"]+)"/gm,
                                ""
                            );
                            break;
                    }
                });

                content = content.replace(
                    /{{(data-\w+-\w+):([^}}]+)}}/gm,
                    "$2"
                );
                content = content.replace(/(data-\w+-\w)="([^"]+)"/gm, "");
                return acc.replace(match, content);
            }, html);
        },
    };
}
