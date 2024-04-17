const Textspositions = [0, 20, 50, 65, 93];
const TextspositionsRecommaded = [115, 135, 160, 175, 203];
const TextspositionsAdvanced =[225, 245]

let GetAllData;
const svgContainer = document.getElementById('layer1');
async function postJSON(data) {
    try {
        const response = await fetch("http://localhost:9002/RequestProcessor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        GetAllData = result;
    } catch (error) {
        console.error("Error:", error);
    }
}
const payload = {
    "app": "CyberAccountPlanning",
    "action": "/api/Master/getMaturitySatusMaster",
    "requestType": "GET"
};
postJSON(payload).then(() => {
    const fundamentalData = GetAllData.filter(x => x.maturityLevel === "Fundamental");

    fundamentalData.forEach((mainItem, idx) => {

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("style", `font-family:Arial;fill:url(#linearGradient${idx});stroke-width:0.74799973`);
        path.setAttribute("d", 'M 3.5,247 H 102 v -2 l 5,5 -5,5 v -2 l -98,0 z');

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("style", "font-size:3.24830055px;font-family:Arial;stroke-width:0.74799967");
        text.setAttribute("transform", "scale(1.1839215,0.84465057)");

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("style", "font-weight:600;font-size:2.99199867px;fill:#ffffff;stroke-width:0.74799967")
        tspan.setAttribute("x", "37");
        tspan.setAttribute("dy", "297");
        tspan.textContent = mainItem.maturityLevel;
        text.appendChild(tspan);

        svgContainer.appendChild(path);
        svgContainer.appendChild(text);

        const fillterData = mainItem.tblCapSiteSecurityMaturityMasterSubs.filter((y => y.pursuitType === "NIST"))

        const splitIndex = Math.ceil(fillterData.length / 2);

        const firstPart = fillterData.slice(0, splitIndex);

        const secondPart = fillterData.slice(splitIndex);

        firstPart.forEach((item, index) => {
            const labels = item.maturitySecurityLabel.split(" ");

            // Create circle
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("style", "fill:" + item.maturitySecurityStatusColor);
            circle.setAttribute("cx", (index % 2 === 0 ? 13 : 37) + Math.floor(index / 2) * 60);
            circle.setAttribute("cy", index % 2 === 0 ? 82 : 62);
            circle.setAttribute("r", "2");

            // Create path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("style", "opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.30;marker-end:url(#marker37770);");
            path.setAttribute("d", `m ${10 + index * 30},${index % 2 === 0 ? 82 : 62} h ${index % 2 === 0 ? -4 : 4} v ${index % 2 === 0 ? 10 : 30}`);

            // Create group and append circle and path
            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute("transform", "matrix(0.73299603,0,0,0.76331037,0.87478487,174.53467)");
            group.appendChild(circle);
            group.appendChild(path);

            // Append group to SVG container
            svgContainer.appendChild(group);

            // Create text element for labels
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("font-size", "13");
            text.setAttribute("font-weight", "600");

            const labelTextLength = labels.length;
            const yPos = labelTextLength > 2 ? 226 : 228;
            const yPosSecond = labelTextLength > 2 ? 210 : 212
            text.setAttribute("transform", `matrix(0.20,0,0,0.200,${Textspositions[index]}, ${index % 2 !== 0 ? yPosSecond : yPos})`);

            // Add text content for each label
            labels.forEach((label, idx) => {
                const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttribute("x", "0");
                tspan.setAttribute("dy", "15");
                tspan.textContent = label;
                text.appendChild(tspan);
            });
            // Append text element to SVG container
            svgContainer.appendChild(text);
        });

        secondPart.forEach((item, index) => {
            const labels = item.maturitySecurityLabel.split(" ");
            // Create circle
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("style", "fill:" + item.maturitySecurityStatusColor);
            circle.setAttribute("cx", (index % 2 === 0 ? 18 : 32) + Math.floor(index / 2) * 60);
            circle.setAttribute("cy", index % 2 === 0 ? 115 : 140);
            circle.setAttribute("r", "2");

            // Create path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("style", "opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.279776;stroke-linecap:square;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-start:url(#marker37770);paint-order:markers stroke fill");
            path.setAttribute("d", `m ${10 + index * 30},105 0.04 , ${index % 2 === 0 ? 10 : 35} ${index % 2 === 0 ? 5 : -5}, 0`);

            // Create group and append circle and path
            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute("transform", "matrix(0.73299603,0,0,0.76331037,0.87478487,174.53467)");
            group.appendChild(circle);
            group.appendChild(path);

            // Append group to SVG container
            svgContainer.appendChild(group);

            // Create text element for labels
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("font-size", "13");
            text.setAttribute("font-weight", "600");


            const labelTextLength = labels.length;
            text.setAttribute("transform", `matrix(0.20,0,0,0.200,${(index % 2 === 0 ? 10 : 20) + Math.floor(index / 2) * 40}, ${index % 2 === 0 ? 265 : 285})`);

            // Add text content for each label
            labels.forEach((label, idx) => {
                const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttribute("x", "0");
                tspan.setAttribute("dy", "15");
                tspan.textContent = label;
                text.appendChild(tspan);
            });
            // Append text element to SVG container
            svgContainer.appendChild(text);
        });
    })


    // < !--Recommaned 
    const recommandedData = GetAllData.filter(x => x.maturityLevel === "Recommanded");

    recommandedData.forEach((mainItem, idx) => {

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("style", `fill:url(#linearGradient1)`);
        path.setAttribute("d", 'M 111,247 H 210 v -2 l 5,5 -5,5 v -2 l -98,0 z');

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("style", "font-size:3.24830055px;font-family:Arial;stroke-width:0.74799967");
        text.setAttribute("transform", "scale(1.1839215,0.84465057)");

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("style", "font-weight:600;font-size:2.99199867px;fill:#ffffff;stroke-width:0.74799967")
        tspan.setAttribute("x", "127");
        tspan.setAttribute("dy", "297");
        tspan.textContent = mainItem.maturityLevel;
        text.appendChild(tspan);

        svgContainer.appendChild(path);
        svgContainer.appendChild(text);

        const fillterData = mainItem.tblCapSiteSecurityMaturityMasterSubs.filter((y => y.pursuitType === "NIST"))

        const splitIndex = Math.ceil(fillterData.length / 2);

        const firstPart = fillterData.slice(0, splitIndex);

        const secondPart = fillterData.slice(splitIndex);

        firstPart.forEach((item, index) => {
            const labels = item.maturitySecurityLabel.split(" ");

            // Create circle
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("style", "fill:" + item.maturitySecurityStatusColor);
            circle.setAttribute("cx", (index % 2 === 0 ? 163 : 186) + Math.floor(index / 2) * 60);
            circle.setAttribute("cy", index % 2 === 0 ? 82 : 62);
            circle.setAttribute("r", "2");

            // Create path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("style", "opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.30;marker-end:url(#marker37770);");
            path.setAttribute("d", `m ${160 + index * 30},${index % 2 === 0 ? 82 : 62} h ${index % 2 === 0 ? -4 : 4} v ${index % 2 === 0 ? 10 : 30}`);

            // Create group and append circle and path
            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute("transform", "matrix(0.73299603,0,0,0.76331037,0.87478487,174.53467)");

            group.appendChild(circle);

            group.appendChild(path);

            // Append group to SVG container
            svgContainer.appendChild(group);

            // Create text element for labels
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("font-size", "13");
            text.setAttribute("font-weight", "600");

            const labelTextLength = labels.length;
            const yPos = labelTextLength > 2 ? 226 : 228;
            const yPosSecond = labelTextLength > 2 ? 210 : 212
            text.setAttribute("transform", `matrix(0.20,0,0,0.200,${TextspositionsRecommaded[index]}, ${index % 2 !== 0 ? yPosSecond : yPos})`);

            // Add text content for each label
            labels.forEach((label, idx) => {
                const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttribute("x", "0");
                tspan.setAttribute("dy", "15");
                tspan.textContent = label;
                text.appendChild(tspan);
            });
            // Append text element to SVG container
            svgContainer.appendChild(text);
        });

        secondPart.forEach((item, index) => {
            const labels = item.maturitySecurityLabel.split(" ");
            // Create circle
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("style", "fill:" + item.maturitySecurityStatusColor);
            circle.setAttribute("cx", (index % 2 === 0 ? 168 : 182) + Math.floor(index / 2) * 60);
            circle.setAttribute("cy", index % 2 === 0 ? 115 : 140);
            circle.setAttribute("r", "2");

            // Create path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("style", "opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.279776;stroke-linecap:square;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-start:url(#marker37770);paint-order:markers stroke fill");
            path.setAttribute("d", `m ${160 + index * 30},105 0.04 , ${index % 2 === 0 ? 10 : 35} ${index % 2 === 0 ? 5 : -5}, 0`);

            // Create group and append circle and path
            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute("transform", "matrix(0.73299603,0,0,0.76331037,0.87478487,174.53467)");
            group.appendChild(circle);
            group.appendChild(path);

            // Append group to SVG container
            svgContainer.appendChild(group);

            // Create text element for labels
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("font-size", "14");
            text.setAttribute("font-weight", "600");


            const labelTextLength = labels.length;
            text.setAttribute("transform", `matrix(0.20,0,0,0.200,${(index % 2 === 0 ? 120 : 132) + Math.floor(index / 2) * 40}, ${index % 2 === 0 ? 265 : 285})`);

            // Add text content for each label
            labels.forEach((label, idx) => {
                const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttribute("x", "0");
                tspan.setAttribute("dy", "15");
                tspan.textContent = label;
                text.appendChild(tspan);
            });
            // Append text element to SVG container
            svgContainer.appendChild(text);
        });
    })


    const advancedData = GetAllData.filter(x => x.maturityLevel === "Advanced");

    advancedData.forEach((mainItem, idx) => {

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("style", `fill:url(#linearGradient2)`);
        path.setAttribute("d", 'M 218,247 H 272 v -2 l 5,5 -5,5 v -2 l -53,0 z');

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("style", "font-size:3.24830055px;font-family:Arial");
        text.setAttribute("transform", "scale(1.1839215,0.84465057)");

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute("style", "font-weight:600;font-size:2.99199867px;fill:#ffffff;stroke-width:0.74799967")
        tspan.setAttribute("x", "200");
        tspan.setAttribute("dy", "297");
        tspan.textContent = mainItem.maturityLevel;
        text.appendChild(tspan);

        svgContainer.appendChild(path);
        svgContainer.appendChild(text);

        const fillterData = mainItem.tblCapSiteSecurityMaturityMasterSubs.filter((y => y.pursuitType === "NIST"))

        const splitIndex = Math.ceil(fillterData.length / 2);

        const firstPart = fillterData.slice(0, splitIndex);

        const secondPart = fillterData.slice(splitIndex);

        firstPart.forEach((item, index) => {
            const labels = item.maturitySecurityLabel.split(" ");

            // Create circle
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("style", "fill:" + item.maturitySecurityStatusColor);
            circle.setAttribute("cx", (index % 2 === 0 ? 313 : 337) + Math.floor(index / 2) * 60);
            circle.setAttribute("cy", index % 2 === 0 ? 82 : 62);
            circle.setAttribute("r", "2");

            // Create path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("style", "opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.30;marker-end:url(#marker37770);");
            path.setAttribute("d", `m ${310 + index * 30},${index % 2 === 0 ? 82 : 62} h ${index % 2 === 0 ? -4 : 4} v ${index % 2 === 0 ? 10 : 30}`);

            // Create group and append circle and path
            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute("transform", "matrix(0.73299603,0,0,0.76331037,0.87478487,174.53467)");

            group.appendChild(circle);

            group.appendChild(path);

            // Append group to SVG container
            svgContainer.appendChild(group);

            // Create text element for labels
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("font-size", "13");
            text.setAttribute("font-weight", "600");

            const labelTextLength = labels.length;
            const yPos = labelTextLength > 2 ? 226 : 228;
            const yPosSecond = labelTextLength > 2 ? 210 : 212
            text.setAttribute("transform", `matrix(0.20,0,0,0.200,${TextspositionsAdvanced[index]}, ${index % 2 !== 0 ? yPosSecond : yPos})`);

            // Add text content for each label
            labels.forEach((label, idx) => {
                const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttribute("x", "0");
                tspan.setAttribute("dy", "15");
                tspan.textContent = label;
                text.appendChild(tspan);
            });
            // Append text element to SVG container
            svgContainer.appendChild(text);
        });

        secondPart.forEach((item, index) => {
            const labels = item.maturitySecurityLabel.split(" ");
            // Create circle
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("style", "fill:" + item.maturitySecurityStatusColor);
            circle.setAttribute("cx", (index % 2 === 0 ? 328 : 342) + Math.floor(index / 2) * 60);
            circle.setAttribute("cy", index % 2 === 0 ? 115 : 140);
            circle.setAttribute("r", "2");

            // Create path
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("style", "opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.279776;stroke-linecap:square;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;marker-start:url(#marker37770);paint-order:markers stroke fill");
            path.setAttribute("d", `m ${320 + index * 30},105 0.04 , ${index % 2 === 0 ? 10 : 35} ${index % 2 === 0 ? 5 : -5}, 0`);

            // Create group and append circle and path
            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute("transform", "matrix(0.73299603,0,0,0.76331037,0.87478487,174.53467)");
            group.appendChild(circle);
            group.appendChild(path);

            // Append group to SVG container
            svgContainer.appendChild(group);

            // Create text element for labels
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("font-size", "14");
            text.setAttribute("font-weight", "600");


            const labelTextLength = labels.length;
            text.setAttribute("transform", `matrix(0.20,0,0,0.200,${(index % 2 === 0 ? 230 : 249) + Math.floor(index / 2) * 40}, ${index % 2 === 0 ? 265 : 285})`);

            // Add text content for each label
            labels.forEach((label, idx) => {
                const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttribute("x", "0");
                tspan.setAttribute("dy", "15");
                tspan.textContent = label;
                text.appendChild(tspan);
            });
            // Append text element to SVG container
            svgContainer.appendChild(text);
        });
    })


    const image =document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute('href', "./img/security.png");
    image.setAttribute('height', "500")
    image.setAttribute('width', "150");
    image.setAttribute("transform", "matrix(0.200,0,0,0.250,270, 187)")

    svgContainer.appendChild(image);

}).catch(error => console.error("Error:", error));
