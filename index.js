const img=document.querySelectorAll(".head");
const op={};
const obs=new IntersectionObserver((entreis)=>{
    entreis.forEach(ent=>{
        ent.target.classList.toggle('show' , ent.isIntersecting)
        // ent.target.classList.toggle('slide' , ent.isIntersecting)
    })
,op} );
img.forEach(img=>{
    obs.observe(img);
})
// ----------------------------------------------------------------
const h1=document.querySelectorAll("h1");
const ops={};
const obsr=new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
        ent.target.classList.toggle('h1' , ent.isIntersecting)
       
    })
,ops} );
h1.forEach(imgs=>{
    obsr.observe(imgs);
})
// ------------------------------------------------------------------
const image=document.querySelectorAll('.img1');
const opt={ };
const obsre=new IntersectionObserver((entries)=>{
    entries.forEach(entr=>{
        entr.target.classList.toggle('showimg' , entr.isIntersecting)
       
    })
},opt);
image.forEach(image=>{
    obsre.observe(image);
})
// -------------------------------------------------------------------
const img21=document.querySelectorAll('.img21');
const option={};
const img2=new IntersectionObserver((entries)=>{
    entries.forEach(ele=>{
        ele.target.classList.toggle('show21' ,ele.isIntersecting)

    })
},option)
img21.forEach(img21=>{
    img2.observe(img21);
})
// -------------------------------------------------------------------
const img22=document.querySelectorAll('.img22');
const options={};
const imgg=new IntersectionObserver((entries)=>{
    entries.forEach(ele=>{
        ele.target.classList.toggle('show22' ,ele.isIntersecting)

    })
},options)
img22.forEach(img22=>{
    imgg.observe(img22);
})
// -------------------------------------------------------------------
const img3=document.querySelectorAll('.img23');
const options1={};
const img23=new IntersectionObserver((entries)=>{
    entries.forEach(ele=>{
        ele.target.classList.toggle('show23' ,ele.isIntersecting)

    })
},options1)
img3.forEach(img3=>{
    img23.observe(img3);
})
// -----------------------------------------------------------------------
const supp =document.querySelectorAll('.supp ul a i ','.supp p');
const options2={};
const support=new IntersectionObserver((ent)=>{
    ent.forEach(el=>{
        el.target.classList.toggle('showsupp',el.isIntersecting)
    })
},options2);
supp.forEach(sup=>{
    support.observe(sup)
});
// ------------------------------------------------------------------
const card =document.querySelectorAll(' .about .card');
const options3={};
const cardd=new IntersectionObserver((ent)=>{
    ent.forEach(el=>{
        el.target.classList.toggle('showcard',el.isIntersecting)
    })
},options3);
card.forEach(card=>{
    cardd.observe(card)
});