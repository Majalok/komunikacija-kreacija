//import { ContentGenerator } from "../ContentGenerator"

//require("./src/ContentGenerator")

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/omeni",
    isPermanent: true,
    redirectInBrowser: true,
  })

  const blogPost = require.resolve(`./src/templates/novica.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: blogPost,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  console.log("\n\n\n----- exports.onCreateNode")

  if (node.frontmatter != undefined) {
    //console.log("--- node: ", node)
    //console.log("--- node.frontmatter.title: ", node.frontmatter.title)
    //console.log("--- node.frontmatter.intro: ", node.frontmatter.intro)

    //console.log("BLAAAA> Smile😀".replace(/\p{Emoji}/gu, ""))
    //console.log("BLAAAA> Smile😀".replace(/\p{Emoji}/, ""))

    //console.log("emoji=YES> ", node.frontmatter.intro.match(/\p{Emoji=yes}/))

    // ----- this should work ------
    let wink = node.frontmatter.intro.match("\u{1F609}")
    if (wink != null) {
      // console.log("0emoji wink test> ", wink)
      let winkMatch = node.frontmatter.intro.indexOf(wink[0])
      // console.log("0 wink match> ", winkMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F609}",
        "<img className='emoji-img' src='../icons/wink.png' width='20px' alt='' />"
      )
      let winkTemp = node.frontmatter.intro.replace("\u{1F609}", "$$$$$$")
      //  console.log("0 replace winkTemp> ", winkTemp)
    }

    let grinningFace = node.frontmatter.intro.match("\u{1F600}")
    if (grinningFace != null) {
      //console.log("0emoji grinningFace test> ", grinningFace)
      let grinningFaceMatch = node.frontmatter.intro.indexOf(grinningFace[0])
      //console.log("0 grinningFace match> ", grinningFaceMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F600}",
        "<img className='emoji-img' src='../icons/grinning.png' width='20px' alt='' />"
      )
    }

    let grinningFaceBigEyes = node.frontmatter.intro.match("\u{1F603}")
    if (grinningFaceBigEyes != null) {
      //console.log("0emoji BigEyes test> ", grinningFaceBigEyes)
      let grinningFaceBigEyesMatch = node.frontmatter.intro.indexOf(grinningFaceBigEyes[0])
      //console.log("0 grinningFace match> ", grinningFaceBigEyesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F603}",
        "<img className='emoji-img' src='../icons/grinningBigEyes.png' width='20px' alt='' />"
      )
    }

    let like = node.frontmatter.intro.match("\u{1F44D}")
    if (like != null) {
      // console.log("0emoji like test> ", like)
      let likeMatch = node.frontmatter.intro.indexOf(like[0])
      // console.log("0 like match> ", likeMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F44D}",
        "<img className='emoji-img' src='../icons/like.png' width='20px' alt='' />"
      )
      let likeTemp = node.frontmatter.intro.replace("\u{1F44D}", "$$$$$$")
      // console.log("0 replace likeTemp> ", likeTemp)
    }

    let smile = node.frontmatter.intro.match("\u{1F642}")
    if (smile != null) {
      // console.log("0emoji smile test> ", smile)
      let smileMatch = node.frontmatter.intro.indexOf(smile[0])
      // console.log("0 like match> ", smileMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F642}",
        "<img className='emoji-img' src='../icons/smile.png' width='20px' alt='' />"
      )
      let smileTemp = node.frontmatter.intro.replace("\u{1F642}", "$$$$$$")
      //  console.log("0 replace likeTemp> ", smileTemp)
    }

    let heart = node.frontmatter.intro.match("\u{2764}")
    if (heart != null) {
      // console.log("0emoji heart test> ", heart)
      let heartMatch = node.frontmatter.intro.indexOf(heart[0])
      // console.log("0 heart match> ", heartMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{2764}",
        "<img className='emoji-img' src='../icons/heart.png' width='20px' alt='' />"
      )
      let heartTemp = node.frontmatter.intro.replace("\u{2764}", "$$$$$$")
      //  console.log("0 replace likeTemp> ", heartTemp)
    }

    let think = node.frontmatter.intro.match("\u{1F914}")
    if (think != null) {
      // console.log("0emoji think test> ", think)
      let thinkMatch = node.frontmatter.intro.indexOf(think[0])
      // console.log("0 think match> ", thinkMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F914}",
        "<img className='emoji-img' src='../icons/think.png' width='20px' alt='' />"
      )
      let thinkTemp = node.frontmatter.intro.replace("\u{1F914}", "$$$$$$")
      // console.log("0 replace thinkTemp> ", thinkTemp)
    }
    let wondering = node.frontmatter.intro.match("\u{1F644}")
    if (wondering != null) {
      // console.log("0emoji wondering test> ", wondering)
      let wonderingMatch = node.frontmatter.intro.indexOf(wondering[0])
      // console.log("0 wondering match> ", wonderingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F644}",
        "<img className='emoji-img' src='../icons/wondering.png' width='20px' alt='' />"
      )
      let wonderingTemp = node.frontmatter.intro.replace("\u{1F644}", "$$$$$$")
      // console.log("0 replace wonderingTemp> ", wonderingTemp)
    }
    let smirking = node.frontmatter.intro.match("\u{1F60F}")
    if (smirking != null) {
      // console.log("0emoji smirking test> ", smirking)
      let smirkingMatch = node.frontmatter.intro.indexOf(smirking[0])
      // console.log("0 smirking match> ", smirkingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60F}",
        "<img className='emoji-img' src='../icons/smirk.png' width='20px' alt='' />"
      )
      let smirkingTemp = node.frontmatter.intro.replace("\u{1F60F}", "$$$$$$")
      // console.log("0 replace smirkingTemp> ", smirkingTemp)
    }
    let sunglasses = node.frontmatter.intro.match("\u{1F60E}")
    if (sunglasses != null) {
      //console.log("0emoji sunglasses test> ", sunglasses)
      let sunglassesMatch = node.frontmatter.intro.indexOf(sunglasses[0])
      // console.log("0 sunglasses match> ", sunglassesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60E}",
        "<img className='emoji-img' src='../icons/sunglasses.png' width='20px' alt='' />"
      )
      let sunglassesTemp = node.frontmatter.intro.replace("\u{1F60E}", "$$$$$$")
      // console.log("0 replace sunglassesTemp> ", sunglassesTemp)
    }
    let unamused = node.frontmatter.intro.match("\u{1F612}")

    if (unamused != null) {
      //console.log("0emoji unamused test> ", unamused)
      let unamusedMatch = node.frontmatter.intro.indexOf(unamused[0])
      // console.log("0 unamused match> ", unamusedMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F612}",
        "<img className='emoji-img' src='../icons/smile3.png' width='20px' alt='' />"
      )
      let unamusedTemp = node.frontmatter.intro.replace("\u{1F60E}", "$$$$$$")
      //console.log("0 replace unamusedTemp> ", unamusedTemp)
    }
    /*    let tongue = node.frontmatter.intro.match("\u{1F61C}")
  
        if (tongue != null) {
          console.log("0emoji tongue test> ", tongue)
          let tongueMatch = node.frontmatter.intro.indexOf(tongue[0])
          console.log("0 tongue match> ", tongueMatch)
          node.frontmatter.intro = node.frontmatter.intro.replace(
            "\u{1F61C}",
            "<img className='emoji-img' src='../icons/tongue.png' width='20px' alt='' />"
          )
        } */

    let beamSmilingEyes = node.frontmatter.intro.match("\u{1F601}")

    if (beamSmilingEyes != null) {
      //console.log("0emoji beamSmilingEyes test> ", beamSmilingEyes)
      let beamSmilingEyesMatch = node.frontmatter.intro.indexOf(beamSmilingEyes[0])
      // console.log("0 beamSmilingEyes match> ", beamSmilingEyesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F601}",
        "<img className='emoji-img' src='../icons/beamSmilingEyes.png' width='20px' alt='' />"
      )
    }

    let faceTearsOfJoy = node.frontmatter.intro.match("\u{1F602}")

    if (faceTearsOfJoy != null) {
      //console.log("0emoji faceTearsOfJoy test> ", faceTearsOfJoy)
      let faceTearsOfJoyMatch = node.frontmatter.intro.indexOf(faceTearsOfJoy[0])
      //console.log("0 faceTearsOfJoy match> ", faceTearsOfJoyMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F602}",
        "<img className='emoji-img' src='../icons/faceTearsOfJoy.png' width='20px' alt='' />"
      )
    }
    let faceEyesHeart = node.frontmatter.intro.match("\u{1F60D}")

    if (faceEyesHeart != null) {
      //console.log("0emoji faceEyesHeart test> ", faceEyesHeart)
      let faceEyesHeartMatch = node.frontmatter.intro.indexOf(faceEyesHeart[0])
      //console.log("0 faceEyesHeart match> ", faceEyesHeartMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60D}",
        "<img className='emoji-img' src='../icons/faceEyesHeart.png' width='20px' alt='' />"
      )
    }
    let smileHalo = node.frontmatter.intro.match("\u{1F607}")

    if (smileHalo != null) {
      //console.log("0emoji smileHalo test> ", smileHalo)
      let smileHaloMatch = node.frontmatter.intro.indexOf(smileHalo[0])
      //console.log("0 smileHalo match> ", smileHaloMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F607}",
        "<img className='emoji-img' src='../icons/smileHalo.png' width='20px' alt='' />"
      )
    }
    let smileNormal = node.frontmatter.intro.match("\u{1F642}")

    if (smileNormal != null) {
      // console.log("0emoji smileNormal test> ", smileNormal)
      let smileNormalMatch = node.frontmatter.intro.indexOf(smileNormal[0])
      // console.log("0 smileNormal match> ", smileNormalMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F642}",
        "<img className='emoji-img' src='../icons/smile.png' width='20px' alt='' />"
      )
    }
    let smileNeutral = node.frontmatter.intro.match("\u{1F610}")

    if (smileNeutral != null) {
      //console.log("0emoji smileNeutral test> ", smileNeutral)
      let smileNeutralMatch = node.frontmatter.intro.indexOf(smileNeutral[0])
      //console.log("0 smileNeutral match> ", smileNeutralMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F610}",
        "<img className='emoji-img' src='../icons/smileHalo.png' width='20px' alt='' />"
      )
    }
    let shusingFace = node.frontmatter.intro.match("\u{1F92B}")

    if (shusingFace != null) {
      // console.log("0emoji shusingFace test> ", shusingFace)
      let smileNeutralMatch = node.frontmatter.intro.indexOf(shusingFace[0])
      // console.log("0 shusingFace match> ", smileNeutralMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F92B}",
        "<img className='emoji-img' src='../icons/shusingFace.png' width='20px' alt='' />"
      )
    }
    let kiss = node.frontmatter.intro.match("\u{1F618}")

    if (kiss != null) {
      //console.log("0emoji kiss test> ", kiss)
      let kissMatch = node.frontmatter.intro.indexOf(kiss[0])
      // console.log("0 kiss match> ", kissMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F618}",
        "<img className='emoji-img' src='../icons/kiss.png' width='20px' alt='' />"
      )
    }
    let kissNoHeart = node.frontmatter.intro.match("\u{1F617}")

    if (kissNoHeart != null) {
      //console.log("0emoji kissNoHeart test> ", kissNoHeart)
      let kissNoHeartMatch = node.frontmatter.intro.indexOf(kissNoHeart[0])
      //console.log("0 kissNoHeart match> ", kissNoHeartMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F617}",
        "<img className='emoji-img' src='../icons/kissNoHeart.png' width='20px' alt='' />"
      )
    }
    let blushed = node.frontmatter.intro.match("\u{1F60A}")

    if (blushed != null) {
      //console.log("0emoji blushed test> ", blushed)
      let blushedMatch = node.frontmatter.intro.indexOf(blushed[0])
      // console.log("0 blushed match> ", blushedMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60A}",
        "<img className='emoji-img' src='../icons/blushed.png' width='20px' alt='' />"
      )
    }
    let tongue = node.frontmatter.intro.match("\u{1F445}")

    if (tongue != null) {
      //console.log("0emoji tongue test> ", tongue)
      let tongueMatch = node.frontmatter.intro.indexOf(tongue[0])
      //console.log("0 tongue match> ", tongueMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F445}",
        "<img className='emoji-img' src='../icons/tongue.png' width='20px' alt='' />"
      )
    }
    let expressionless = node.frontmatter.intro.match("\u{1F611}")

    if (expressionless != null) {
      // console.log("0emoji expressionless test> ", expressionless)
      let expressionlessMatch = node.frontmatter.intro.indexOf(expressionless[0])
      // console.log("0 expressionless match> ", expressionlessMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F611}",
        "<img className='emoji-img' src='../icons/expressionless.png' width='20px' alt='' />"
      )
    }
    let grinnigSquinting = node.frontmatter.intro.match("\u{1F606}")

    if (grinnigSquinting != null) {
      //console.log("0emoji grinnigSquinting test> ", grinnigSquinting)
      let grinnigSquintingMatch = node.frontmatter.intro.indexOf(grinnigSquinting[0])
      //console.log("0 grinnigSquinting match> ", grinnigSquintingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F606}",
        "<img className='emoji-img' src='../icons/grinningSquinting.png' width='20px' alt='' />"
      )
    }
    let grinnigFaceSweat = node.frontmatter.intro.match("\u{1F972}")

    if (grinnigFaceSweat != null) {
      console.log("0emoji grinnigFaceSweat test> ", grinnigFaceSweat)
      let grinnigFaceSweatMatch = node.frontmatter.intro.indexOf(grinnigFaceSweat[0])
      console.log("0 grinnigFaceSweat match> ", grinnigFaceSweatMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F972}",
        "<img className='emoji-img' src='../icons/grinningFaceSweat.png' width='20px' alt='' />"
      )
    }
    let roflFace = node.frontmatter.intro.match("\u{1F923}")

    if (roflFace != null) {
      // console.log("0emoji roflFace test> ", roflFace)
      let roflFaceMatch = node.frontmatter.intro.indexOf(roflFace[0])
      // console.log("0 roflFaceMatch match> ", roflFaceMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F923}",
        "<img className='emoji-img' src='../icons/roflSmile.png' width='20px' alt='' />"
      )
    }
    let grinnigFaceSmilingEyes = node.frontmatter.intro.match("\u{1F604}")

    if (grinnigFaceSmilingEyes != null) {
      console.log("0emoji grinnigFaceSmilingEyes test> ", grinnigFaceSmilingEyes)
      let grinnigFaceSmilingEyesMatch = node.frontmatter.intro.indexOf(grinnigFaceSmilingEyes[0])
      console.log("0 grinnigFaceSmilingEyes match> ", grinnigFaceSmilingEyesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F604}",
        "<img className='emoji-img' src='../icons/grinningFaceSmilingEyes.png' width='20px' alt='' />"
      )
    }
    /* let womanFacepalming = node.frontmatter.intro.match("\u{U+1F926 U+200D U+2640 U+FE0F}")

    if (womanFacepalming != null) {
      console.log("0emoji womanFacepalming test> ", womanFacepalming)
      let womanFacepalmingMatch = node.frontmatter.intro.indexOf(womanFacepalming[0])
      console.log("0 womanFacepalming match> ", womanFacepalmingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{U+1F926 U+200D U+2640 U+FE0F}",
        "<img className='emoji-img' src='../icons/womanFacepalming.png' width='20px' alt='' />"
      )
    }
    let womanTippingHand = node.frontmatter.intro.match("\u{1F926 U+200D U+2640 U+FE0F}")

    if (womanTippingHand != null) {
      console.log("0emoji womanTippingHand test> ", womanFacepalming)
      let womanTippingHandMatch = node.frontmatter.intro.indexOf(womanTippingHand[0])
      console.log("0 womanFacepalming match> ", womanTippingHandMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{U+1F926 U+200D U+2640 U+FE0F}",
        "<img className='emoji-img' src='../icons/womanTippingHand.png' width='20px' alt='' />"
      )
    } */
    let speakNoEvilMonkey = node.frontmatter.intro.match("\u{1F64A}")

    if (speakNoEvilMonkey != null) {
      console.log("0emoji womanTippingHand test> ", speakNoEvilMonkey)
      let speakNoEvilMonkeyMatch = node.frontmatter.intro.indexOf(speakNoEvilMonkey[0])
      console.log("0 speakNoEvilMonkey match> ", speakNoEvilMonkeyMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F64A}",
        "<img className='emoji-img' src='../icons/speakNoEvilMonkey.png' width='20px' alt='' />"
      )
    }
    let hearNoEvilMonkey = node.frontmatter.intro.match("\u{1F649}")

    if (hearNoEvilMonkey != null) {
      console.log("0emoji hearNoEvilMonkey test> ", hearNoEvilMonkey)
      let hearNoEvilMonkeyMatch = node.frontmatter.intro.indexOf(hearNoEvilMonkey[0])
      console.log("0 hearNoEvilMonkey match> ", hearNoEvilMonkeyMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F649}",
        "<img className='emoji-img' src='../icons/speakNoEvilMonkey.png' width='20px' alt='' />"
      )
    }
    let seeNoEvilMonkey = node.frontmatter.intro.match("\u{1F648}")

    if (seeNoEvilMonkey != null) {
      console.log("0emoji seeNoEvilMonkey test> ", seeNoEvilMonkey)
      let seeNoEvilMonkeyMatch = node.frontmatter.intro.indexOf(seeNoEvilMonkey[0])
      console.log("0 seeNoEvilMonkey match> ", seeNoEvilMonkeyMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F648}",
        "<img className='emoji-img' src='../icons/seeNoEvilMonkey.png' width='20px' alt='' />"
      )
    }

    let muscle = node.frontmatter.intro.match("\u{1F4AA}")

    if (muscle != null) {
      console.log("0emoji muscle test> ", seeNoEvilMonkey)
      let muscleMatch = node.frontmatter.intro.indexOf(muscle[0])
      console.log("0 seeNoEvilMonkey match> ", muscleMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F4AA}",
        "<img className='emoji-img' src='../icons/muscle.png' width='20px' alt='' />"
      )
    }
    // -------------------------- 1F649

  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
