
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.186.0/build/three.module.js';
import * as THREE from 'three';
import { metalness, roughness } from 'three/tsl';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.186.0/examples/jsm/controls/OrbitControls.js';
import { Wireframe } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Loader, Scene } from 'three/webgpu';

const sessao1 = document.querySelector('.section1')
const sessao2 = document.querySelector('.section2')
const sessao3 = document.querySelector('.section3')
const sessao4 = document.querySelector('.section4')
const sessao5 = document.querySelector('.section5')
const sessao6 = document.querySelector('.section6')


//Configurando a cena
const scene = new THREE.Scene()

//camera
const camera = new THREE.PerspectiveCamera(75, sessao1.clientWidth / sessao1.clientHeight, 0.1, 1000)

//Renderizador
const renderer = new THREE.WebGLRenderer()

//tamanho da tela
renderer.setSize(sessao1.clientWidth, sessao1.clientHeight)

//linkamento do renderizador
sessao1.appendChild(renderer.domElement)

//declarando um cubo
const geometry = new THREE.BoxGeometry(2, 2, 2)

//material do cubo
const material = new THREE.MeshStandardMaterial({ color: '#00b7ff' })

//aplicando o material
const cube = new THREE.Mesh(geometry, material)
const controls = new OrbitControls(camera, renderer.domElement)
//adicionando a tela o cubo
scene.add(cube)
const luzAmbiente = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(luzAmbiente)


camera.position.z = 5

controls.enableDamping = true    // suaviza o movimento (efeito de "inércia")
controls.dampingFactor = 0.05    // quanto mais suave (padrão 0.05)
controls.minDistance = 3         // não deixa dar zoom infinito pra perto
controls.maxDistance = 10        // nem infinito pra longe
controls.enablePan = false       // desativa arrastar a câmera lateralmente (só rotação/zoom)
controls.autoRotate = true       // gira sozinho quando ninguém mexe (efeito "showroom")
controls.autoRotateSpeed = 2     // velocidade da rotação automática
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()

}
animate()
window.addEventListener('resize', function () {
    camera.aspect = sessao1.clientWidth / sessao1.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(sessao1.clientWidth, sessao1.clientHeight)
})

const cena = new THREE.Scene()

const Camera = new THREE.PerspectiveCamera(75, sessao2.clientWidth / sessao2.clientHeight, 0.1, 1000)

const renderizado = new THREE.WebGLRenderer()

renderizado.setSize(sessao2.clientWidth, sessao2.clientHeight)

sessao2.appendChild(renderizado.domElement)

const geometria = new THREE.LatheGeometry()
const materialCubo = new THREE.MeshStandardMaterial({ color: 'rgb(215, 215, 253)' })

const cubos = new THREE.Mesh(geometria, materialCubo)

cena.add(cubos)

const iluminação = new THREE.DirectionalLight(0xffffff, 2)
iluminação.position.set(2, 2, 20)
cena.add(iluminação)

Camera.position.z = 2

function animação() {
    requestAnimationFrame(animação)
    renderizado.render(cena, Camera)
    cubos.rotation.x += 0.02
    cubos.rotation.y += 1.11

}
animação()

window.addEventListener('resize', function () {
    Camera.aspect = sessao2.clientWidth / sessao2.clientHeight
    Camera.updateProjectionMatrix()
    renderizado.setSize(sessao2.clientWidth, sessao2.clientHeight)
})


const cenario = new THREE.Scene()

const cameraCenario = new THREE.PerspectiveCamera(75, sessao3.clientWidth / sessao3.clientHeight, 0.1, 1000)
cameraCenario.position.z = 5

const MeuRenderizador = new THREE.WebGLRenderer()

MeuRenderizador.setSize(sessao3.clientWidth, sessao3.clientHeight)

const MATERIAL = new THREE.MeshStandardMaterial({ color: '#fff' })
const GEOMETRIAdoOBJETO = new THREE.DodecahedronGeometry()

const OBJETO = new THREE.Mesh(GEOMETRIAdoOBJETO, MATERIAL)

cenario.add(OBJETO)
sessao3.appendChild(MeuRenderizador.domElement)
const luz = new THREE.DirectionalLight(0xffffff, 2)

luz.position.set(3, 3, 5)

cenario.add(luz)

function minhaAnimação() {
    requestAnimationFrame(minhaAnimação)
    MeuRenderizador.render(cenario, cameraCenario)
    OBJETO.rotation.x += 0.05
    OBJETO.rotation.z += 0.01
}
minhaAnimação()

window.addEventListener('resize', function () {
    cameraCenario.aspect = sessao3.clientWidth / sessao3.clientHeight
    cameraCenario.updateProjectionMatrix()
    MeuRenderizador.setSize(sessao4.clientWidth, sessao4.clientHeight)
})


const cenarioObjto = new THREE.Scene()

const MinhaCamera = new THREE.PerspectiveCamera(75, sessao4.clientWidth / sessao4.clientHeight, 0.1, 1000)
MinhaCamera.position.z = 3

const MinhaRenderizador = new THREE.WebGLRenderer()
MinhaRenderizador.setSize(sessao4.clientWidth, sessao4.clientHeight)
sessao4.appendChild(MinhaRenderizador.domElement)

const MinhaGeometria = new THREE.SphereGeometry(1, 100, 100)

const MeuMateriaL = new THREE.MeshStandardMaterial({ color: '#00c3ff', wireframe: true })

const Forma = new THREE.Mesh(MinhaGeometria, MeuMateriaL)

cenarioObjto.add(Forma)

const MinhaLuz = new THREE.PointLight(0xffffff, 100)
MinhaLuz.position.set(3, 3, 5)
cenarioObjto.add(MinhaLuz)

function MINHAanimation() {
    requestAnimationFrame(MINHAanimation)
    Forma.rotation.x += 0.01
    Forma.rotation.y += 0.1
    MinhaRenderizador.render(cenarioObjto, MinhaCamera)
}
MINHAanimation()

window.addEventListener('resize', function () {
    MinhaCamera.aspect = sessao4.clientWidth / sessao4.clientHeight
    MinhaCamera.updateProjectionMatrix()
    MinhaRenderizador.setSize(sessao4.clientWidth, sessao4.clientHeight)
})


const cenaDoModelo = new THREE.Scene()

const CameraModelo = new THREE.PerspectiveCamera(75, sessao5.clientWidth / sessao5.clientHeight, 0.1, 1000)
CameraModelo.position.z = 1.5
const RendirazarModelo = new THREE.WebGLRenderer()
RendirazarModelo.setSize(sessao5.clientWidth, sessao5.clientHeight)
sessao5.appendChild(RendirazarModelo.domElement)


const luzModelo = new THREE.AmbientLight(0xffffff, 2)
luzModelo.position.set(2, 3, 5)
cenaDoModelo.add(luzModelo)

let modelo = null
const londer = new GLTFLoader()
londer.load(
    '/tenis_deportivos_converse.glb',

    (gltf) => {
        modelo = gltf.scene
        cenaDoModelo.add(modelo)
    }
)

// CONTROLAR OBJETO APRENDER A USAR MAIS TARDE
const controles = new OrbitControls(
    CameraModelo,
    RendirazarModelo.domElement
)
controles.enableDamping = true
// APRENDER USAR O CONTROLE

function AnimaçãoModelo() {
    requestAnimationFrame(AnimaçãoModelo)
    RendirazarModelo.render(cenaDoModelo, CameraModelo)
    if (modelo) {
        modelo.rotation.y += 0.01
    }
    controles.update()
}
AnimaçãoModelo()


window.addEventListener('resize', function () {
    CameraModelo.aspect = sessao5.clientWidth / sessao5.clientHeight
    CameraModelo.updateProjectionMatrix()
    RendirazarModelo.setSize(sessao5.clientWidth, sessao5.clientHeight)
})


const CenaBMW = new THREE.Scene()
const CameraBMW = new THREE.PerspectiveCamera(75, sessao6.clientWidth / sessao6.clientHeight, 0.1 , 1000)
const RenderizarBMW = new THREE.WebGLRenderer()
RenderizarBMW.setSize(sessao6.clientWidth, sessao6.clientHeight)

CameraBMW.position.z = 22
CameraBMW.position.y = 5




sessao6.appendChild(RenderizarBMW.domElement)
const iluminarBMW = new THREE.AmbientLight(0xffffff, 2)
CenaBMW.add(iluminarBMW)

window.addEventListener('resize' , function(){
    CameraBMW.aspect = sessao6.clientWidth / sessao6.clientHeight
    CameraBMW.updateProjectionMatrix()
    RenderizarBMW.setSize(sessao6.clientWidth , sessao6.clientHeight)
})

const carregarBMW = new GLTFLoader()
let bmw = null
carregarBMW.load(
    '/bmw_m4_widebody__www.vecarz.com.glb',
    (gltf) =>{
         bmw = gltf.scene
        CenaBMW.add(bmw)
    }
)


function BMWanimação(){
    requestAnimationFrame(BMWanimação)
RenderizarBMW.render(CenaBMW, CameraBMW)

if(bmw){
    bmw.rotation.y += 0.01
        bmw.rotation.x += 0.01

}
}
BMWanimação()
