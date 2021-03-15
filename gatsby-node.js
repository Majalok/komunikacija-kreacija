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
        "<img className='emoji-img' src='../icons/faceWithRollingEyes.png' width='20px' alt='' />"
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
    let tongue = node.frontmatter.intro.match("\u{1F445}")

    if (tongue != null) {
      console.log("0emoji tongue test> ", tongue)
      let tongueMatch = node.frontmatter.intro.indexOf(tongue[0])
      console.log("0 tongue match> ", tongueMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F445}",
        "<img className='emoji-img' src='../icons/tongue.png' width='20px' alt='' />"
      )
    }

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

    let kissSmilingEyes = node.frontmatter.intro.match("\u{1F619}")

    if (kissSmilingEyes != null) {
      //console.log("0emoji kissNoHeart test> ", kissNoHeart)
      let kissSmilingEyesMatch = node.frontmatter.intro.indexOf(kissSmilingEyes[0])
      //console.log("0 kissNoHeart match> ", kissNoHeartMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F619}",
        "<img className='emoji-img' src='../icons/kissSmilingEyes.png' width='20px' alt='' />"
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
      //console.log("0emoji grinnigFaceSmilingEyes test> ", grinnigFaceSmilingEyes)
      let grinnigFaceSmilingEyesMatch = node.frontmatter.intro.indexOf(grinnigFaceSmilingEyes[0])
      //console.log("0 grinnigFaceSmilingEyes match> ", grinnigFaceSmilingEyesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F604}",
        "<img className='emoji-img' src='../icons/grinningFaceSmilingEyes.png' width='20px' alt='' />"
      )
    }
    let womanFacepalming = node.frontmatter.intro.match("\u{1F481}|\u{200D}|\u{2640}|\u{FE0F}")

    if (womanFacepalming != null) {
      //console.log("0emoji womanFacepalming test> ", womanFacepalming)
      let womanFacepalmingMatch = node.frontmatter.intro.indexOf(womanFacepalming[0])
      //console.log("0 womanFacepalming match> ", womanFacepalmingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "{\u{1F481}|\u{200D}|\u{2640}|\u{FE0F}",
        "<img className='emoji-img' src='../icons/womanFacepalming.png' width='20px' alt='' />"
      )
    }
    let womanTippingHand = node.frontmatter.intro.match("\u{1F926}|\u{200D}|\u{2640}|\u{FE0F}")

    if (womanTippingHand != null) {
      //console.log("0emoji womanTippingHand test> ", womanTippingHand)
      let womanTippingHandMatch = node.frontmatter.intro.indexOf(womanTippingHand[0])
      //console.log("0 womanTippingHand match> ", womanTippingHandMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F926}",
        "<img className='emoji-img' src='../icons/womanTippingHand.png' width='20px' alt='' />"
      )
    }
    let speakNoEvilMonkey = node.frontmatter.intro.match("\u{1F64A}")

    if (speakNoEvilMonkey != null) {
      //console.log("0emoji womanTippingHand test> ", speakNoEvilMonkey)
      let speakNoEvilMonkeyMatch = node.frontmatter.intro.indexOf(speakNoEvilMonkey[0])
      //console.log("0 speakNoEvilMonkey match> ", speakNoEvilMonkeyMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F64A}",
        "<img className='emoji-img' src='../icons/speakNoEvilMonkey.png' width='20px' alt='' />"
      )
    }
    let hearNoEvilMonkey = node.frontmatter.intro.match("\u{1F649}")

    if (hearNoEvilMonkey != null) {
      let hearNoEvilMonkeyMatch = node.frontmatter.intro.indexOf(hearNoEvilMonkey[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F649}",
        "<img className='emoji-img' src='../icons/hearNoEvilMonkey.png' width='20px' alt='' />"
      )
    }
    let seeNoEvilMonkey = node.frontmatter.intro.match("\u{1F648}")

    if (seeNoEvilMonkey != null) {
      let seeNoEvilMonkeyMatch = node.frontmatter.intro.indexOf(seeNoEvilMonkey[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F648}",
        "<img className='emoji-img' src='../icons/seeNoEvilMonkey.png' width='20px' alt='' />"
      )
    }

    let muscle = node.frontmatter.intro.match("\u{1F4AA}")

    if (muscle != null) {
      let muscleMatch = node.frontmatter.intro.indexOf(muscle[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F4AA}",
        "<img className='emoji-img' src='../icons/muscle.png' width='20px' alt='' />"
      )
    }

    let huggingFace = node.frontmatter.intro.match("\u{1F917}")

    if (huggingFace != null) {
      let huggingFaceMatch = node.frontmatter.intro.indexOf(huggingFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F917}",
        "<img className='emoji-img' src='../icons/huggingFace.png' width='20px' alt='' />"
      )
    }
    let sleepingFace = node.frontmatter.intro.match("\u{1F634}")

    if (sleepingFace != null) {
      let sleepingFaceMatch = node.frontmatter.intro.indexOf(sleepingFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F634}",
        "<img className='emoji-img' src='../icons/sleepingFace.png' width='20px' alt='' />"
      )
    }

    let sleepyFace = node.frontmatter.intro.match("\u{1F62A}")

    if (sleepyFace != null) {
      let sleepyFaceMatch = node.frontmatter.intro.indexOf(sleepyFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F62A}",
        "<img className='emoji-img' src='../icons/sleepyFace.png' width='20px' alt='' />"
      )
    }

    let faceWithoutMouth = node.frontmatter.intro.match("\u{1F636}")

    if (faceWithoutMouth != null) {
      let faceWithoutMouthMatch = node.frontmatter.intro.indexOf(faceWithoutMouth[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F636}",
        "<img className='emoji-img' src='../icons/faceWithoutMouth.png' width='20px' alt='' />"
      )
    }

    let zipperMouthFace = node.frontmatter.intro.match("\u{1F910}")

    if (zipperMouthFace != null) {
      let zipperMouthFaceMatch = node.frontmatter.intro.indexOf(zipperMouthFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F910}",
        "<img className='emoji-img' src='../icons/zipperMouthFace.png' width='20px' alt='' />"
      )
    }
    let pensiveFace = node.frontmatter.intro.match("\u{1F614}")

    if (pensiveFace != null) {
      let pensiveFaceMatch = node.frontmatter.intro.indexOf(pensiveFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F614}",
        "<img className='emoji-img' src='../icons/pensiveFace.png' width='20px' alt='' />"
      )
    }

    let faceMedicalMask = node.frontmatter.intro.match("\u{1F637}")

    if (faceMedicalMask != null) {
      let faceMedicalMaskMatch = node.frontmatter.intro.indexOf(faceMedicalMask[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F637}",
        "<img className='emoji-img' src='../icons/faceMedicalMask.png' width='20px' alt='' />"
      )
    }
    let sickFace = node.frontmatter.intro.match("\u{1F912}")

    if (sickFace != null) {
      let sickFaceMatch = node.frontmatter.intro.indexOf(sickFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F912}",
        "<img className='emoji-img' src='../icons/sickFace.png' width='20px' alt='' />"
      )
    }
    let faceHeadBandage = node.frontmatter.intro.match("\u{1F915}")

    if (faceHeadBandage != null) {
      let faceHeadBandageMatch = node.frontmatter.intro.indexOf(faceHeadBandage[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F915}",
        "<img className='emoji-img' src='../icons/faceHeadBandage.png' width='20px' alt='' />"
      )
    }

    let nauseatedFace = node.frontmatter.intro.match("\u{1F922}")

    if (nauseatedFace != null) {
      let nauseatedFaceMatch = node.frontmatter.intro.indexOf(nauseatedFace[0])
      "\u{1F922}",
        "<img className='emoji-img' src='../icons/nauseatedFace.png' width='20px' alt='' />"
      )
    }

    let sneezingFace = node.frontmatter.intro.match("\u{1F927}")

    if (sneezingFace != null) {
      let sneezingFaceMatch = node.frontmatter.intro.indexOf(sneezingFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F927}",
        "<img className='emoji-img' src='../icons/sneezingFace.png' width='20px' alt='' />"
      )
    }

    let knockedOutFace = node.frontmatter.intro.match("\u{1F635}")

    if (knockedOutFace != null) {
      let knockedOutFaceMatch = node.frontmatter.intro.indexOf(knockedOutFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F635}",
        "<img className='emoji-img' src='../icons/knockedOutFace.png' width='20px' alt='' />"
      )
    }
    let cowboyHatFace = node.frontmatter.intro.match("\u{1F920}")

    if (cowboyHatFace != null) {
      let cowboyHatFaceMatch = node.frontmatter.intro.indexOf(cowboyHatFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F920}",
        "<img className='emoji-img' src='../icons/cowboyHatFace.png' width='20px' alt='' />"
      )
    }
    let nerdFace = node.frontmatter.intro.match("\u{1F913}")

    if (nerdFace != null) {
      let nerdFaceMatch = node.frontmatter.intro.indexOf(nerdFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F913}",
        "<img className='emoji-img' src='../icons/nerdFace.png' width='20px' alt='' />"
      )
    }
    let confusedFace = node.frontmatter.intro.match("\u{1F615}")

    if (confusedFace != null) {
      let confusedFaceMatch = node.frontmatter.intro.indexOf(confusedFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F615}",
        "<img className='emoji-img' src='../icons/confusedFace.png' width='20px' alt='' />"
      )
    }
    let worriedFace = node.frontmatter.intro.match("\u{1F61F}")

    if (worriedFace != null) {
      let worriedFaceMatch = node.frontmatter.intro.indexOf(worriedFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F61F}",
        "<img className='emoji-img' src='../icons/worriedFace.png' width='20px' alt='' />"
      )
    }

    let frowningFace = node.frontmatter.intro.match("\u{2639}")

    if (frowningFace != null) {
      let frowningFaceMatch = node.frontmatter.intro.indexOf(frowningFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{2639}",
        "<img className='emoji-img' src='../icons/frowningFace.png' width='20px' alt='' />"
      )
    }
    let frowningFace1 = node.frontmatter.intro.match("\u{FE0F}")

    if (frowningFace1 != null) {
      let frowningFaceMatch1 = node.frontmatter.intro.indexOf(frowningFace1[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{FE0F}",
        "<img className='emoji-img' src='../icons/frowningFace.png' width='20px' alt='' />"
      )
    }

    let hushedFace = node.frontmatter.intro.match("\u{1F62F}")

    if (hushedFace != null) {
      let hushedFaceMatch = node.frontmatter.intro.indexOf(hushedFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F62F}",
        "<img className='emoji-img' src='../icons/hushedFace.png' width='20px' alt='' />"
      )
    }
    let astonishedFace = node.frontmatter.intro.match("\u{1F632}")

    if (astonishedFace != null) {
      let astonishedFaceMatch = node.frontmatter.intro.indexOf(astonishedFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F632}",
        "<img className='emoji-img' src='../icons/astonishedFace.png' width='20px' alt='' />"
      )
    }
    let flushedFace = node.frontmatter.intro.match("\u{1F633}")

    if (flushedFace != null) {
      let flushedFaceMatch = node.frontmatter.intro.indexOf(flushedFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F633}",
        "<img className='emoji-img' src='../icons/flushedFace.png' width='20px' alt='' />"
      )
    }

    let fearfulFace = node.frontmatter.intro.match("\u{1F628}")

    if (fearfulFace != null) {
      let fearfulFaceMatch = node.frontmatter.intro.indexOf(fearfulFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F628}",
        "<img className='emoji-img' src='../icons/fearfulFace.png' width='20px' alt='' />"
      )
    }
    let cryingFace = node.frontmatter.intro.match("\u{1F622}")

    if (cryingFace != null) {
      let cryingFaceMatch = node.frontmatter.intro.indexOf(cryingFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F622}",
        "<img className='emoji-img' src='../icons/cryingFace.png' width='20px' alt='' />"
      )
    }

    let faceScreaming = node.frontmatter.intro.match("\u{1F631}")

    if (faceScreaming != null) {
      let faceScreamingMatch = node.frontmatter.intro.indexOf(faceScreaming[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F631}",
        "<img className='emoji-img' src='../icons/faceScreaming.png' width='20px' alt='' />"
      )
    }
    let faceSavoringFood = node.frontmatter.intro.match("\u{1F60B}")

    if (faceSavoringFood != null) {
      let faceSavoringFoodMatch = node.frontmatter.intro.indexOf(faceSavoringFood[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60B}",
        "<img className='emoji-img' src='../icons/faceSavoringFood.png' width='20px' alt='' />"
      )
    }

    let faceWithTongue = node.frontmatter.intro.match("\u{1F61B}")

    if (faceWithTongue != null) {
      let faceWithTongueMatch = node.frontmatter.intro.indexOf(faceWithTongue[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F61B}",
        "<img className='emoji-img' src='../icons/faceWithTongue.png' width='20px' alt='' />"
      )
    }
    let winkingFaceWithTongue = node.frontmatter.intro.match("\u{1F61C}")

    if (winkingFaceWithTongue != null) {
      let winkingFaceWithTongueMatch = node.frontmatter.intro.indexOf(winkingFaceWithTongue[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F61C}",
        "<img className='emoji-img' src='../icons/winkingFaceWithTongue.png' width='20px' alt='' />"
      )
    }

    let disappointedFace = node.frontmatter.intro.match("\u{1F61E}")

    if (disappointedFace != null) {
      let disappointedFaceMatch = node.frontmatter.intro.indexOf(disappointedFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F61E}",
        "<img className='emoji-img' src='../icons/disappointedFace.png' width='20px' alt='' />"
      )
    }
    let poutingFace = node.frontmatter.intro.match("\u{1F621}")

    if (poutingFace != null) {
      let poutingFaceMatch = node.frontmatter.intro.indexOf(poutingFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F621}",
        "<img className='emoji-img' src='../icons/poutingFace.png' width='20px' alt='' />"
      )
    }

    let angryFace = node.frontmatter.intro.match("\u{1F620}")

    if (angryFace != null) {
      let angryFaceMatch = node.frontmatter.intro.indexOf(angryFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F620}",
        "<img className='emoji-img' src='../icons/angryFace.png' width='20px' alt='' />"
      )
    }

    let clownFace = node.frontmatter.intro.match("\u{1F921}")

    if (clownFace != null) {
      let clownFaceMatch = node.frontmatter.intro.indexOf(clownFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F921}",
        "<img className='emoji-img' src='../icons/clownFace.png' width='20px' alt='' />"
      )
    }
    let ogreFace = node.frontmatter.intro.match("\u{1F479}")

    if (ogreFace != null) {
      let ogreFaceMatch = node.frontmatter.intro.indexOf(ogreFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F479}",
        "<img className='emoji-img' src='../icons/ogreFace.png' width='20px' alt='' />"
      )
    }

    let goblinFace = node.frontmatter.intro.match("\u{1F47A}")

    if (goblinFace != null) {
      let goblinFaceMatch = node.frontmatter.intro.indexOf(goblinFace[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F47A}",
        "<img className='emoji-img' src='../icons/goblinFace.png' width='20px' alt='' />"
      )
    }

    let heartWithArrow = node.frontmatter.intro.match("\u{1F498}")

    if (heartWithArrow != null) {
      let heartWithArrowMatch = node.frontmatter.intro.indexOf(heartWithArrow[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F498}",
        "<img className='emoji-img' src='../icons/heartWithArrow.png' width='20px' alt='' />"
      )
    }
    let sparklingHeart = node.frontmatter.intro.match("\u{1F496}")

    if (sparklingHeart != null) {
      let sparklingHeartMatch = node.frontmatter.intro.indexOf(sparklingHeart[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F496}",
        "<img className='emoji-img' src='../icons/sparklingHeart.png' width='20px' alt='' />"
      )
    }

    let twoHearts = node.frontmatter.intro.match("\u{1F495}")

    if (twoHearts != null) {
      let twoHeartsMatch = node.frontmatter.intro.indexOf(twoHearts[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F495}",
        "<img className='emoji-img' src='../icons/twoHearts.png' width='20px' alt='' />"
      )
    }

    let brokenHeart = node.frontmatter.intro.match("\u{1F494}")

    if (brokenHeart != null) {
      let brokenHeartMatch = node.frontmatter.intro.indexOf(brokenHeart[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F494}",
        "<img className='emoji-img' src='../icons/brokenHeart.png' width='20px' alt='' />"
      )
    }

    let redHeart = node.frontmatter.intro.match("\u{FE0F}")

    if (redHeart != null) {
      let redHeartMatch = node.frontmatter.intro.indexOf(redHeart[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{FE0F}",
        "<img className='emoji-img' src='../icons/redHeart.png' width='20px' alt='' />"
      )
    }
    let pileOfPoo = node.frontmatter.intro.match("\u{FE0F}")

    if (pileOfPoo != null) {
      let pileOfPooMatch = node.frontmatter.intro.indexOf(pileOfPoo[0])
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{FE0F}",
        "<img className='emoji-img' src='../icons/pileOfPoo.png' width='20px' alt='' />"
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
