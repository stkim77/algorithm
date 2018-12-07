const accordion = (function(){
    let accordionData = [
        {
            heading : 'Heading01',
            title : 'Title of Contents',
            contents : 'this is contents'
        },
        {
            heading : 'Heading01',
            title : 'Title of Contents',
            contents : 'this is contents'
        },
        {
            heading : 'Heading01',
            title : 'Title of Contents',
            contents : 'this is contents'
        },
        {
            heading : 'Heading01',
            title : 'Title of Contents',
            contents : 'this is contents'
        }
    ];
    let selectAccordionIndex = -1;

    const showAccordionData = (elementID) => {
        accordionData.map((data, index)=>{
            let newDiv = document.createElement("div");
            newDiv.className = 'accordion';
            let newHead = document.createElement("div");
            newHead.className = 'head';
            let newHeadTitle = document.createElement("div");
            newHeadTitle.appendChild(document.createTextNode(data.heading));
            let newHeadTitleArrow = document.createElement("img");
            newHeadTitleArrow.src = "images/arrow.png";
            newHeadTitleArrow.onclick = ()=>{selectAccordion(index)};
            newHead.appendChild(newHeadTitle);
            newHead.appendChild(newHeadTitleArrow);

            newDiv.appendChild(newHead);

            let newContents = document.createElement("div");
            newContents.className = 'contents';
            newContents.id = "accordion" + index;
            let newContentsTitle = document.createElement("div");
            newContentsTitle.className = 'title';
            newContentsTitle.appendChild(document.createTextNode(data.title));
            let newContentsText = document.createElement("div");
            newContentsText.className = 'text';
            newContentsText.appendChild(document.createTextNode(data.contents));
            newContents.appendChild(newContentsTitle);
            newContents.appendChild(newContentsText);

            newDiv.appendChild(newContents);

            document.getElementById(elementID).appendChild(newDiv);
        });
    };
    const selectAccordion = (index) => {
        if (selectAccordionIndex>=0 && selectAccordionIndex<accordionData.length) {
            document.getElementById("accordion" + selectAccordionIndex).style.display = "none";
        }
        if (selectAccordionIndex!=index) {
            document.getElementById("accordion" + index).style.display = "block";
            selectAccordionIndex = index;
        } else {
            selectAccordionIndex = -1;
        }
    };
    const isSelected = (index) => {
        if (selectAccordionIndex === index) {
            return true;
        } else {
            return false;
        }
    };
    return {
        initData : showAccordionData,
        selectAccordion : selectAccordion,
        isSelected : isSelected
    };
}());